import '../styles/globals.css';
export const reportWebVitals = (metric) => {
	// console.log(metric);
	metric.label === 'web-vital' && console.log(metric);
};
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
