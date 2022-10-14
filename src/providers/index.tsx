import { WebCrawlProvider } from "./WebCrawl";

interface AppProvider {
    children: React.ReactNode;
}

const Providers = ({ children }: AppProvider ) => {
    return (
        <WebCrawlProvider>
            {children}
        </WebCrawlProvider>
    );
};

export default Providers