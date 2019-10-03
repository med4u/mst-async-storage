import { IStateTreeNode } from "mobx-state-tree";
export interface WithAsyncStorageOptions {
    key?: string;
    autoSave?: boolean;
    only?: string | string[];
    except?: string | string[];
}
export declare const withAsyncStorage: (options?: WithAsyncStorageOptions) => (self: IStateTreeNode<import("mobx-state-tree").IAnyType>) => {
    actions: {
        load: () => Promise<any>;
        save: () => Promise<void>;
        beforeDetach(): void;
    };
};
