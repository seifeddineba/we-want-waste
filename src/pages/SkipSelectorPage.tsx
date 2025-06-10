import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchSkips } from "../api/skips";
import CardSkeleton from "../components/CardSkeleton";
import Stepper from "../components/Stepper";
import MainLayout from "../layouts/MainLayout";
import SkipCard from "../components/SkipCard";
import type { SkipInterface } from "../interfaces/skipsInterface";
import FooterSummary from "../components/FooterSummary";


export default function SkipSelectorPage() {
  const [skips, setSkips] = useState<SkipInterface[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<SkipInterface | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchSkips()
      .then(setSkips)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleCurrentStep = useCallback((step: number) => {
    setCurrentStep(step);
  }, []);

  const handleSelectSkip = useCallback((skip: SkipInterface) => {
    setSelectedSkip((prev) => (prev?.id === skip.id ? null : skip));
  }, []);

  const totalPrice = useMemo(() => {
    if (!selectedSkip) return 0;
    return selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100);
  }, [selectedSkip]);

  return (
    <MainLayout>
      <Stepper currentStep={currentStep} onStepClick={handleCurrentStep} />

      <h2 className="text-2xl text-center font-bold my-6 text-gray-800">
        Choose Your Skip Size
      </h2>
      <span className="block text-center text-gray-500 mb-6">
        Select the skip size that best suits your needs
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : skips.map((skip: SkipInterface) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                selected={selectedSkip?.id === skip.id}
                onClick={handleSelectSkip}
              />
            ))}
      </div>

      {selectedSkip?.size && (
        <FooterSummary
          selectedSize={selectedSkip?.size}
          totalPrice={totalPrice}
        />
      )}
    </MainLayout>
  );
}
