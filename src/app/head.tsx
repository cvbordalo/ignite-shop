import { getCssText } from '../styles';

export default function Head() {
  return (
    <>
      <title></title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </>
  );
}
