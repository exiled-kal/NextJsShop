import Document from "next/document";

export default class MyDocument extends Document {
    render() {
        return <Route path='path'>
            <{:Component} />
        </Route>)
    }
}
