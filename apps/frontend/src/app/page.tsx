import Background from '../presentation/components/background/background';
import FormCreateShortUrl from '../presentation/components/form_create_short_url/form_create_short_url';
import HeaderTitle from '../presentation/components/header_title/header_title';
import { getYear } from '../utils/date';

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

      <footer
        className="
        z-10
        flex
        flex-col
        items-center
        justify-center
        text-gray-400
        text-sm
        "
      >
        <p> © {getYear()} Short.ar</p>
        <p>Joel Nicolas Sartori</p>
      </footer>
    </main>
  );
}
