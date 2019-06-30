import lodash from "lodash";

export default class NestedHash {

    constructor(initialValue = {}) {
        this.hashed = initialValue;
    }

    get(key, defaultValue) {
        return lodash.get(this.hashed, key, defaultValue);
    }

    set(key, value) {
        lodash.set(this.hashed, key, value);
    }

    unset(key) {
        lodash.unset(this.hashed, key);
    }

    has(key) {
        return lodash.has(this.hashed, key);
    }

    merge(other) {
        lodash.merge(this.hashed, other);
    }

    toJS() {
        return this.hashed;
    }
}
