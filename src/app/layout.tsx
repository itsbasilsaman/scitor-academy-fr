"use client"
 
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import HtmlWithLang from "@/component/HtmlWithLang";
import { Provider } from 'react-redux';
import store from '../../Redux/Store';


// removed invalid lines
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <HtmlWithLang>{children}</HtmlWithLang>
      </LanguageProvider>
    </Provider>
  );
}

