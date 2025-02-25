/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return (
    <div className="ps-[2rem] max-md:ps-0">
      <h5 className="text-2xl text-secondary-foreground max-md:text-base">
        {children}
      </h5>
    </div>
  );
}
