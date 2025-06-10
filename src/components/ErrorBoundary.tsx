import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-600">
          <h2 className="text-xl font-semibold">Something went wrong.</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
