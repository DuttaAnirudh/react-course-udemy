const initialStateCuatomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function customerReducer(state = initialStateCuatomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

/////////////////////////////////////////
// ACTION CREATORS : CUSTOMER MANAGEMENT
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}

export default customerReducer;
