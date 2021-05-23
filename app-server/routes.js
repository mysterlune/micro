const AppController = require('./controllers/app');
const RobotController = require('./controllers/robot');

const controllerMap = new Map();

module.exports = async (app) => {

    controllerMap.set(AppController.name, new AppController());

    const robotController = new RobotController();
    controllerMap.set(RobotController.name, robotController);

    // setup routes
    Routes.forEach(route => {
        debugger;
        app[route.method](route.route, (req, res, next) => {
            let result;
            let controller;
            const ControllerClass = route.controller;
            controller = controllerMap.get(ControllerClass.name);
            result = controller[route.action](req, res, next);
            return result;
        });
    });
};

const Routes = [
    {
        method: 'get',
        route: '/api/v1/imarobot',
        controller: RobotController,
        action: 'getTruth',
    }
];

module.exports.Routes = Routes;