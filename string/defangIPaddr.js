const defangIPaddr = (str) => {
    return str.replace(/\./g, '[.]');
};

console.log(defangIPaddr('1.1.1.1'));