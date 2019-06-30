import BaseContainer from "@fusion.io/container";

export default class Container extends BaseContainer {

    resolve(Target, ...targetParameters) {
        return this.make(Container.guessTargetName(Target), ...targetParameters);
    }

    invoke(Target, method, ...givenParameters) {
        const target = this.resolve(Target);

        return target[method](...givenParameters);
    }

    static instance() {
        if (!Container.containerInstance) {
            Container.containerInstance = new Container();
        }

        return Container.containerInstance;
    }

    static guessTargetName(Target) {
        if ("function" === typeof Target) {
            if (Target.concrete) {
                return Target.concrete;
            }

            if (Target.namespace) {
                return (Target.namespace || '') + '.' + Target.name;
            }

            return Target.name;

        } else {
            return Target;
        }
    }
}
