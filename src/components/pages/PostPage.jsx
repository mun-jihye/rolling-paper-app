const PostPage = () => {
  const [isVisible, setVisible] = setState(false);
  return (
    <NGB>
      {isVisible && <Button />}
      <FormPage />
    </NGB>
  );
};
