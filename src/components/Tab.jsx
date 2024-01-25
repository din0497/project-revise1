export default function Tab({ children, buttons, buttonWrapper }) {
    const ButtonWrapper = buttonWrapper
    return (
    <>
      <ButtonWrapper>{buttons}</ButtonWrapper>
      {children}
    </>
  );
}
