import { Fragment } from "react";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/layouts/demo1/breadcrumbs/Breadcrumbs";
import useStyles from "./style";

const OrderBookingReportsPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        {/* Breadcrumbs */}
        <div className="gap-2 pb-2 mb-3">
          <Breadcrumbs items={[{ title: "Order Booking Reports" }]} />
        </div>
        <div
          className={`grid grid-cols-11 lg:grid-cols-11 border rounded-lg gap-4 p-4 ${classes.customStyle}`}
        >
          Order Booking Reports
        </div>
      </Container>
    </Fragment>
  );
};
export default OrderBookingReportsPage;
