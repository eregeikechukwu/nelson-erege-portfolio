/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return (
    <div
      style={{
        paddingInlineStart: 'clamp(2.5em, 3vw, 8em)',
      }}
    >
      <h5 className='text-3xl text-secondary-foreground'>{children}</h5>
    </div>
  );
}
