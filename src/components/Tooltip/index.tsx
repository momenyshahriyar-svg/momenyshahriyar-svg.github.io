import { type JSX, Show, createSignal } from "solid-js";

type Props = {
  children?: JSX.Element;
  class?: string;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal<number>(0);

  const messagesEn = [
    "Hi there! 👋",
    "Clicked again?",
    "Still here?",
    "Welcome to my portfolio!",
    "Curious, aren't you?",
    "Let's create something cool!",
  ];

  const messagesFa = [
    "سلام! خیلی خوش آمدید 👋",
    "دوباره کلیک کردی؟ 😄",
    "هنوز اینجایی؟",
    "به پورتفولیوی من خوش آمدید!",
    "چقدر کنجکاوی!",
    "بیا یک پروژه جذاب با هم بسازیم!",
  ];

  const currentMessage = () => {
    const isFa =
      typeof document !== "undefined" &&
      document.documentElement.lang === "fa";
    const list = isFa ? messagesFa : messagesEn;
    const count = clickCount();
    return list[Math.min(count, list.length - 1)];
  };

  return (
    <div class={`h-full relative inline-block ${props.class ?? ""}`}>
      <div
        class="h-full"
        onMouseDown={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onMouseUp={() => {
          setIsVisible(false);
        }}
        onTouchStart={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onTouchEnd={() => {
          setIsVisible(false);
        }}
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="tt-shell absolute left-1/2 -translate-x-1/2 -translate-y-26 mt-1 z-10">
          <div class="tt--ns w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20">
            <p class="w-max text-xs">{currentMessage()}</p>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;
