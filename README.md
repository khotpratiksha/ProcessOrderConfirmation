# ProcessOrderConfirmation

This repository contains a basic SAPUI5 Fiori application skeleton and ABAP
class stubs for a Process Order Confirmation app.

## Fiori Frontend
The UI5 app resides in the `webapp` folder with three simple views:
* **Resource** – enter a resource (work center)
* **Order** – enter the process order
* **Confirm** – display order data and allow quantity/time entry

Routing is defined in `manifest.json`. Controllers contain minimal logic for
navigation; posting is left as a future implementation.

To run the app locally you can use any static web server to serve the `webapp`
folder, e.g. `ui5 serve` if using the UI5 tooling.

## ABAP Backend
The `abap` directory contains an ABAP class `ZCL_PROCESS_ORDER_CONFIRM` with
placeholder methods `GET_ORDER_DETAILS` and `POST_CONFIRMATION`. These should
wrap calls to standard BAPIs such as `BAPI_PROCORD_GET_DETAIL` and
`BAPI_PROCORDCONF_CREATE_TT`.

This repository does not provide full business logic but serves as a starting
point for development based on the provided functional specification.
