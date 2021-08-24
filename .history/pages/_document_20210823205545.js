import Document, { Html } from "next/document";
import Head from "next/head";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
            </Html>
        )
    }
}
