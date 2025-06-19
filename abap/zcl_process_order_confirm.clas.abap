CLASS zcl_process_order_confirm DEFINITION
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS: get_order_details
               IMPORTING iv_order TYPE aufnr
               EXPORTING es_data TYPE zstr_po_details,
             post_confirmation
               IMPORTING is_confirm TYPE zstr_po_confirm
               EXPORTING es_return TYPE bapiret2.
ENDCLASS.

CLASS zcl_process_order_confirm IMPLEMENTATION.
  METHOD get_order_details.
    "Call BAPI_PROCORD_GET_DETAIL and other logic here
  ENDMETHOD.

  METHOD post_confirmation.
    "Build TIMETICKETS table and call BAPI_PROCORDCONF_CREATE_TT
    "Then call BAPI_TRANSACTION_COMMIT
  ENDMETHOD.
ENDCLASS.
