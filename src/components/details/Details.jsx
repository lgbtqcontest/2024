import "./det.css";

// eslint-disable-next-line react/prop-types
const Details = ({ img, title, text, idx }) => {
  return (
    <div className="ev-detts">
      <div className={`circle ${idx}`}>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0002 2.75C8.54841 2.75 5.75019 5.54822 5.75019 9C5.75019 12.4518 8.54841 15.25 12.0002 15.25C15.452 15.25 18.2502 12.4518 18.2502 9C18.2502 5.54822 15.452 2.75 12.0002 2.75ZM4.25019 9C4.25019 4.71979 7.71998 1.25 12.0002 1.25C16.2804 1.25 19.7502 4.71979 19.7502 9C19.7502 9.94098 19.5825 10.8428 19.2753 11.6772L21.5626 14.0454C21.8199 14.3118 22.0343 14.5338 22.1944 14.7187C22.3522 14.9009 22.5139 15.1092 22.6094 15.3513C22.9428 16.1961 22.6746 17.1959 21.8704 17.6883C21.6392 17.8298 21.3758 17.8885 21.1493 17.9264C20.9178 17.9652 20.6236 17.9963 20.2765 18.033L20.2532 18.0355C19.794 18.084 19.7068 18.0995 19.6475 18.1222C19.4694 18.1905 19.3231 18.3359 19.2507 18.5386C19.2252 18.6099 19.2096 18.7116 19.1631 19.1831L19.1609 19.2053C19.1253 19.5664 19.0954 19.869 19.0583 20.1065C19.0222 20.3379 18.9672 20.601 18.8352 20.8321C18.3659 21.654 17.3765 21.9623 16.5183 21.5992C16.2767 21.497 16.0722 21.3259 15.8976 21.1637C15.7189 20.9978 15.5045 20.7758 15.2473 20.5095L15.2277 20.4892L12.0002 17.0893L8.76823 20.4939L8.75308 20.5095C8.49587 20.7758 8.28151 20.9978 8.10281 21.1637C7.92813 21.3259 7.72367 21.497 7.48209 21.5992C6.6239 21.9623 5.63452 21.654 5.16517 20.8321C5.03322 20.601 4.97819 20.3379 4.94206 20.1065C4.90498 19.869 4.87512 19.5664 4.83951 19.2053L4.83732 19.1831C4.7908 18.7116 4.77523 18.6099 4.74972 18.5386C4.67726 18.3359 4.53097 18.1905 4.35286 18.1222C4.2936 18.0995 4.20636 18.084 3.7472 18.0355L3.72392 18.033C3.37677 17.9963 3.08258 17.9652 2.85103 17.9264C2.62462 17.8885 2.36122 17.8298 2.12998 17.6883C1.32579 17.1959 1.05757 16.1961 1.39098 15.3513C1.48651 15.1092 1.64822 14.9009 1.80598 14.7187C1.96613 14.5338 2.18049 14.3118 2.43786 14.0453L4.72504 11.6772C4.41789 10.8428 4.25019 9.94098 4.25019 9ZM5.42778 13.1088L3.53172 15.072C3.25561 15.3578 3.07007 15.5503 2.93988 15.7007C2.8179 15.8415 2.78939 15.896 2.7864 15.9018C2.69612 16.1307 2.78577 16.3246 2.90479 16.4036C2.91371 16.4065 2.9646 16.4246 3.09871 16.447C3.27988 16.4773 3.52823 16.5039 3.90496 16.5438C3.93016 16.5464 3.95516 16.5491 3.97996 16.5517C4.31908 16.5871 4.62148 16.6188 4.88973 16.7216C5.48872 16.9512 5.94694 17.4316 6.16216 18.0336C6.25843 18.3028 6.2881 18.6065 6.32271 18.9608C6.32513 18.9855 6.32758 19.0106 6.33007 19.0358C6.36846 19.4249 6.39438 19.6848 6.4241 19.8751C6.44954 20.038 6.47003 20.0902 6.47074 20.0934C6.55056 20.2277 6.71461 20.2942 6.89565 20.2185C6.89565 20.2185 6.94566 20.1912 7.08222 20.0644C7.22686 19.9301 7.41207 19.7388 7.68699 19.4541L7.68926 19.4518L10.4092 16.5865C8.31337 16.1493 6.52823 14.8654 5.42778 13.1088ZM13.5911 16.5865C15.687 16.1493 17.4721 14.8654 18.5726 13.1088L20.4687 15.072C20.7448 15.3578 20.9303 15.5503 21.0605 15.7007C21.1825 15.8415 21.211 15.896 21.214 15.9018C21.3042 16.1307 21.2146 16.3246 21.0956 16.4036C21.0867 16.4065 21.0358 16.4246 20.9017 16.447C20.7205 16.4773 20.4721 16.5039 20.0954 16.5438C20.0702 16.5464 20.0452 16.5491 20.0204 16.5517C19.6813 16.5871 19.3789 16.6188 19.1107 16.7216C18.5117 16.9512 18.0534 17.4316 17.8382 18.0336C17.742 18.3028 17.7123 18.6065 17.6777 18.9608C17.6752 18.9855 17.6728 19.0106 17.6703 19.0358C17.6319 19.4249 17.606 19.6848 17.5763 19.8751C17.5508 20.038 17.5304 20.0902 17.5296 20.0934C17.4495 20.2282 17.2846 20.2946 17.1028 20.2177L17.1048 20.2186C17.1048 20.2186 17.0547 20.1912 16.9182 20.0644C16.7735 19.9301 16.5883 19.7388 16.3134 19.4541L16.3111 19.4518L13.5911 16.5865ZM12.0002 7.03449C11.9421 7.13513 11.8774 7.25103 11.8012 7.38769L11.7029 7.56405C11.696 7.5765 11.6885 7.59009 11.6806 7.60466C11.6021 7.74827 11.472 7.9861 11.2552 8.15071C11.0338 8.31877 10.7675 8.37659 10.6118 8.4104C10.5962 8.41379 10.5817 8.41693 10.5685 8.41992L10.3776 8.46312C10.2024 8.50275 10.0597 8.53509 9.93769 8.56575C10.017 8.66345 10.1201 8.78474 10.2542 8.94154L10.3844 9.09372C10.3936 9.10452 10.4036 9.11609 10.4143 9.1284C10.5223 9.25273 10.6965 9.45346 10.7771 9.71261C10.8568 9.96869 10.8293 10.2324 10.812 10.3988C10.8102 10.4154 10.8086 10.431 10.8072 10.4456L10.7875 10.6487C10.7693 10.8369 10.7551 10.9872 10.7456 11.1094C10.8498 11.0635 10.9684 11.0089 11.1092 10.9441L11.288 10.8618C11.3003 10.8561 11.3138 10.8498 11.3283 10.8429C11.4718 10.7752 11.7215 10.6575 12.0002 10.6575C12.2789 10.6575 12.5285 10.7752 12.672 10.8429C12.6866 10.8498 12.7001 10.8561 12.7124 10.8618L12.8912 10.9441C13.032 11.0089 13.1505 11.0635 13.2547 11.1094C13.2453 10.9872 13.2311 10.8369 13.2129 10.6487L13.1932 10.4456C13.1918 10.431 13.1902 10.4154 13.1884 10.3988C13.1711 10.2324 13.1436 9.96869 13.2233 9.71261C13.3038 9.45346 13.4781 9.25273 13.586 9.12841C13.5967 9.11609 13.6068 9.10452 13.616 9.09372L13.7462 8.94153C13.8802 8.78474 13.9833 8.66345 14.0627 8.56575C13.9407 8.53509 13.798 8.50275 13.6228 8.46312L13.4319 8.41992C13.4187 8.41693 13.4042 8.41379 13.3886 8.4104C13.2329 8.37659 12.9666 8.31877 12.7452 8.15071C12.5284 7.9861 12.3983 7.74828 12.3198 7.60466C12.3118 7.5901 12.3044 7.5765 12.2975 7.56405L12.1991 7.38769C12.123 7.25103 12.0583 7.13513 12.0002 7.03449ZM11.0137 5.79963C11.1859 5.57481 11.4985 5.25 12.0002 5.25C12.5019 5.25 12.8145 5.57481 12.9867 5.79963C13.151 6.01421 13.3165 6.31124 13.4862 6.61577C13.4939 6.62961 13.5016 6.64347 13.5093 6.65734L13.6076 6.83369C13.6304 6.87459 13.6484 6.90677 13.6641 6.9343C13.6914 6.94071 13.7232 6.94792 13.7629 6.95691L13.9538 7.0001C13.9695 7.00364 13.9851 7.00717 14.0007 7.0107C14.3286 7.08478 14.6543 7.15839 14.9044 7.25695C15.1806 7.36577 15.5549 7.5777 15.6991 8.04161C15.8409 8.49734 15.662 8.88336 15.5058 9.13146C15.3613 9.36108 15.1416 9.61786 14.9167 9.88074C14.9065 9.89262 14.8963 9.90452 14.8862 9.91642L14.756 10.0686C14.7215 10.1089 14.6955 10.1394 14.6736 10.1657C14.6766 10.202 14.6807 10.2443 14.6862 10.3009L14.7059 10.504C14.7074 10.5195 14.7089 10.5349 14.7104 10.5504C14.7446 10.9023 14.7776 11.2424 14.7655 11.5145C14.7528 11.7997 14.6843 12.2315 14.2971 12.5254C13.8977 12.8286 13.4566 12.7626 13.1769 12.6824C12.9191 12.6086 12.6146 12.4682 12.3079 12.3269C12.2932 12.3201 12.2785 12.3134 12.2638 12.3066L12.0851 12.2243C12.0516 12.2089 12.0241 12.1963 12.0002 12.1854C11.9762 12.1963 11.9488 12.2089 11.9153 12.2243L11.7366 12.3066C11.7219 12.3134 11.7072 12.3201 11.6925 12.3269C11.3858 12.4682 11.0812 12.6086 10.8235 12.6824C10.5438 12.7626 10.1027 12.8286 9.70325 12.5254C9.31608 12.2315 9.24762 11.7997 9.23492 11.5145C9.2228 11.2424 9.25583 10.9023 9.29 10.5504C9.2915 10.5349 9.293 10.5195 9.29451 10.504L9.31418 10.3009C9.31967 10.2443 9.32375 10.202 9.32674 10.1657C9.30484 10.1394 9.27885 10.1089 9.24437 10.0686L9.11422 9.91642C9.10404 9.90452 9.09386 9.89262 9.0837 9.88074C8.85879 9.61786 8.6391 9.36108 8.49455 9.13146C8.33836 8.88336 8.15953 8.49734 8.30124 8.04161C8.44551 7.5777 8.81981 7.36577 9.09595 7.25695C9.34604 7.15839 9.67183 7.08478 9.99964 7.0107C10.0153 7.00717 10.0309 7.00364 10.0465 7.0001L10.2374 6.95691C10.2772 6.94792 10.309 6.94071 10.3363 6.9343C10.352 6.90677 10.3699 6.87459 10.3927 6.83369L10.491 6.65734C10.4988 6.64347 10.5065 6.62961 10.5142 6.61576C10.6839 6.31124 10.8494 6.01421 11.0137 5.79963Z"
          />
        </svg>
      </div>
      <article>
        <h2 className={`prize-title s${idx}`}>{title}</h2>
        <p className="prize-text">{text}</p>
      </article>
    </div>
  );
};

export default Details;
