import { Sparkles } from '../presentation/components/sparkles/sparkles';

export default function Index() {
  return (
    <div
      className="
      relative
      flex
      flex-col
      justify-center
      h-screen
    "
    >
      <div className="absolute -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#9eadff,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7976c5ec] after:bg-zinc-900 z-0">
        <Sparkles
          density={1200}
          className="absolute top-0 left-0 w-full h-full z-0"
        />
      </div>

      <div
        className="
        z-10
        flex
        flex-col
        justify-center
        "
      >
        <div className="text-center text-3xl text-white">
          <br />

          <span>
            Acortá tu
            <span className="text-blue-500"> URL </span>
          </span>
          <br />
          <span className="text-4xl font-bold text-orange-400">
            en un click.
          </span>
        </div>

        <div
          className="
          flex
          flex-col
          justify-center
          w-full
          px-4
          mt-16 
          "
        >
          <form>
            <div className="flex justify-center mt-8">
              <input
                type="text"
                placeholder="Pegá tu URL acá"
                className="w-80 h-12 px-4 text-lg border border-gray-300 rounded-l-lg focus:outline-none focus:border-orange-400"
              />
              <button
                type="submit"
                className="h-12 px-6 text-lg text-white bg-orange-400 border border-orange-400 rounded-r-lg hover:bg-orange-500 focus:outline-none"
              >
                Acortar
              </button>
            </div>

            {/* 
          resultado
         */}
            <div className="flex justify-center mt-8">
              <div
                className="
                flex
                items-center
                justify-center
                w-80
                h-12
                text-lg
                "
              >
                <span className="text-blue-500"> https://short.url/</span>
                <span className="text-orange-400">abc123</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        className="
          flex
          flex-col
          justify-center
          w-full
          px-4 
          mt-24
          "
      ></div>
    </div>
  );
}
