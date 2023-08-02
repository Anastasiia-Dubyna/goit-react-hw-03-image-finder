import { Circles } from 'react-loader-spinner';

export function Loader() {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles_loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
}
