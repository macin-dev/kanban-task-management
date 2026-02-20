export default function BoardItem() {
  return (
    <div className="flex shrink-0 snap-start flex-col gap-5">
      <h2 className="text-[0.75rem] font-bold tracking-[2.4px] text-neutral-500 uppercase">
        Todo (4)
      </h2>

      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }).map((v, i) => (
          <div key={i} className="rounded-lg bg-white px-4 py-5.5">
            <h4 className="text-[0.9375rem] font-bold">
              Build UI for onboarding flow
            </h4>
            <span className="text-[0.75rem] font-bold text-neutral-500">
              0 of 3 substasks
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
