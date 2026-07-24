type LogoProps = {
  showText?: boolean;
};

export default function Logo({ showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white shadow-md">
        IL
      </div>

      {showText && (
        <div>
          <h1 className="text-lg font-bold text-heading">
            Irhora Learn
          </h1>

          <p className="text-xs text-muted">
            Powered by Iris AI
          </p>
        </div>
      )}
    </div>
  );
}