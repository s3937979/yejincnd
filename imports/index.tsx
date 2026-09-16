import img1 from "./85ca41263952ee362d6954d6c3b88b7120f2b048.png";

export default function Splash() {
  return (
    <div className="bg-white relative size-full" data-name="splash">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[161px] left-1/2 top-[calc(50%+0.5px)] w-[364px]" data-name="예진로고 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}