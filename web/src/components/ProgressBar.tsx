interface ProgressProps {
  progress: number;
}
export function ProgressBar(props: ProgressProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={75}
        className="h-3 rounded-xl bg-green-600 transition-all"
        style={{
          width: `${props.progress}%`,
        }}
      />
    </div>
  );
}
