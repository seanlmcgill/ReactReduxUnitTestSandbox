var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

export const setupEnzyme = () => enzyme.configure({ adapter: new Adapter() });
