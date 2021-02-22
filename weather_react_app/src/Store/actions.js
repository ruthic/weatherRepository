function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
// actions.deleteCol(t)
export const actions = new Proxy(
    {},
    {
        get: function (target, prop) {
            if (target[prop] === undefined)
                return function (args) {
                    // console.log("prop=", prop)
                    // console.log("args=", args)
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    };
                };
            else return target[prop];
        }
    }
);