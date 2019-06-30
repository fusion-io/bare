import Container from "./Container";

//----------------------------------------------------------------------------------------------------------------------
// Container
//----------------------------------------------------------------------------------------------------------------------

export const container = Container.instance();

export const namespace = (serviceNamespace) => {
    return (Target) => {
        return class extends Target {
            static get namespace() {
                return serviceNamespace;
            }
        }
    }
};

export const concrete = (serviceName) => {
    return (Target) => {
        return class extends Target {
            static get concrete() {
                return serviceName;
            }
        }
    }
};

export const bind = (...dependencies) => {
    return (Target) => {
        container.bind(Container.guessTargetName(Target), (container, ...invokeParameters) => {
            const dependencyInstances = dependencies.map(dependency => container.resolve(dependency));
            return new Target(...dependencyInstances, ...invokeParameters);
        });
    }
};

export const singleton = (...dependencies) => {
    return (Target) => {
        container.singleton(Container.guessTargetName(Target), (container, ...invokeParameters) => {
            const dependencyInstances = dependencies.map(dependency => container.resolve(dependency));
            return new Target(...dependencyInstances, ...invokeParameters);
        });
    }
};

//----------------------------------------------------------------------------------------------------------------------
// Contracts - The list of supported features
//----------------------------------------------------------------------------------------------------------------------

export const Auth       = "Contracts.Auth";

export const Broadcast  = "Contracts.Broadcast";

export const Cache      = "Contracts.Cache";

export const Channel    = "Contracts.Channel";

export const Config     = "Contracts.Config";

export const Database   = "Contracts.Database";

export const Event      = "Contracts.Event";

export const Hasher     = "Contracts.Hasher";

export const Logger     = "Contracts.Logger";

export const Mail       = "Contracts.Mail";

export const Queue      = "Contracts.Queue";

export const Router     = "Contracts.Router";

export const Serializer = "Contracts.Serializer";

export const Sesssion   = "Contracts.Session";

export const Validator  = "Contracts.Validator";

export const View       = "Contracts.View";
