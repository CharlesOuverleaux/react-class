import { Fragment } from "react";
import MainHeader from "./main-header";

export default function Layout(props) {
  return (
    <Fragment>
      <div className="bg-blue-500">
        <MainHeader />
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
}
