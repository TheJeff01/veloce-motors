export default function SpecTable({ car }) {
  const specs = [
    { label: "Make", value: car.make },
    { label: "Model", value: car.model },
    { label: "Year", value: car.year },
    { label: "Engine", value: car.engine },
    { label: "Power Output", value: `${car.horsepower} hp` },
    { label: "Torque", value: car.torque },
    { label: "0–60 mph", value: car.zeroToSixty },
    { label: "Top Speed", value: car.topSpeed },
    { label: "Transmission", value: car.transmission },
    { label: "Mileage", value: `${car.mileage.toLocaleString()} miles` },
    { label: "Exterior Color", value: car.exteriorColor },
    { label: "Interior Color", value: car.interiorColor },
    { label: "Curb Weight", value: car.weight },
    { label: "Dimensions", value: car.dimensions },
    { label: "Cargo Volume", value: car.cargo },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#1E1E1E]">
      {specs.map((spec, i) => (
        <div
          key={spec.label}
          className={`flex justify-between items-center px-5 py-3.5 border-b border-[#1E1E1E] ${
            i % 2 === 0 ? "md:border-r" : ""
          }`}
        >
          <span className="text-[11px] tracking-[0.12em] uppercase text-[#6B7280]">{spec.label}</span>
          <span className="text-[13px] text-[#F0EDE8] text-right">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}
