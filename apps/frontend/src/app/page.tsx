import Background from '../presentation/components/background/background';

import Spacer from '../presentation/components/design_system/spacer/spacer';
import FormCreateShortUrl from '../presentation/components/form_create_short_url/form_create_short_url';
import HeaderTitle from '../presentation/components/header_title/header_title';

export default function Index() {
  return (
    <main
      className="
      relative
      flex
      flex-col
      justify-center
      h-screen
    "
    >
      <Background />
      <section
        className="
        z-10
        flex
        flex-col
        justify-center
        "
      >
        <HeaderTitle />
        <FormCreateShortUrl />
      </section>

      <Spacer height="50px" />
    </main>
  );
}
