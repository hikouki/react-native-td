import { NativeModules } from 'react-native';
// tslint:disable-next-line:no-object-literal-type-assertion
const TreasureData = {};
const { RNTreasureData } = NativeModules;
TreasureData.initialize = (apiKey) => {
    return RNTreasureData.initialize(apiKey);
};
TreasureData.initializeApiEndpoint = (apiEndpoint) => {
    return RNTreasureData.initializeApiEndpoint(apiEndpoint);
};
TreasureData.initializeEncryptionKey = (encryptionKey) => {
    return RNTreasureData.initializeEncryptionKey(encryptionKey);
};
TreasureData.setDefaultDatabase = (database) => {
    return RNTreasureData.setDefaultDatabase(database);
};
TreasureData.enableAutoAppendUniqId = () => {
    return RNTreasureData.enableAutoAppendUniqId();
};
TreasureData.disableAutoAppendUniqId = () => {
    return RNTreasureData.disableAutoAppendUniqId();
};
TreasureData.enableAutoAppendRecordUUID = () => {
    return RNTreasureData.enableAutoAppendRecordUUID();
};
TreasureData.enableAutoAppendRecordUUID = (column) => {
    return RNTreasureData.enableAutoAppendRecordUUID(column);
};
TreasureData.disableAutoAppendRecordUUID = () => {
    return RNTreasureData.disableAutoAppendRecordUUID();
};
TreasureData.enableAutoAppendModelInformation = () => {
    return RNTreasureData.enableAutoAppendModelInformation();
};
TreasureData.disableAutoAppendModelInformation = () => {
    return RNTreasureData.disableAutoAppendModelInformation();
};
TreasureData.enableAutoAppendAppInformation = () => {
    return RNTreasureData.enableAutoAppendAppInformation();
};
TreasureData.disableAutoAppendAppInformation = () => {
    return RNTreasureData.disableAutoAppendAppInformation();
};
TreasureData.enableAutoAppendLocaleInformation = () => {
    return RNTreasureData.enableAutoAppendLocaleInformation();
};
TreasureData.disableAutoAppendLocaleInformation = () => {
    return RNTreasureData.disableAutoAppendLocaleInformation();
};
TreasureData.enableServerSideUploadTimestamp = () => {
    return RNTreasureData.enableServerSideUploadTimestamp();
};
TreasureData.enableServerSideUploadTimestamp = (column) => {
    return RNTreasureData.enableServerSideUploadTimestamp(column);
};
TreasureData.disableServerSideUploadTimestamp = () => {
    return RNTreasureData.disableServerSideUploadTimestamp();
};
TreasureData.enableLogging = () => {
    return RNTreasureData.enableLogging();
};
TreasureData.disableLogging = () => {
    return RNTreasureData.disableLogging();
};
TreasureData.enableRetryUploading = () => {
    return RNTreasureData.enableRetryUploading();
};
TreasureData.disableRetryUploading = () => {
    return RNTreasureData.disableRetryUploading();
};
TreasureData.enableEventCompression = () => {
    return RNTreasureData.enableEventCompression();
};
TreasureData.disableEventCompression = () => {
    return RNTreasureData.disableEventCompression();
};
TreasureData.addEvent = (record, database, table) => {
    if (database) {
        return RNTreasureData.addEvent(record, database, table);
    }
    else {
        return RNTreasureData.addEvent(record, table);
    }
};
TreasureData.addEventWithCallback = (record, database, table, onSuccess, onError) => {
    if (database) {
        return RNTreasureData.addEventWithCallback(record, database, table, onSuccess, onError);
    }
    else {
        return RNTreasureData.addEventWithCallback(record, table, onSuccess, onError);
    }
};
TreasureData.uploadEvents = () => {
    return RNTreasureData.uploadEvents();
};
TreasureData.uploadEventsWithCallback = (onSuccess, onError) => {
    return RNTreasureData.uploadEventsWithCallback(onSuccess, onError);
};
TreasureData.startSession = () => {
    return RNTreasureData.startSession();
};
TreasureData.startSession = (table) => {
    return RNTreasureData.startSession(table);
};
TreasureData.startSession = (table, database) => {
    return RNTreasureData.startSession(table, database);
};
TreasureData.endSession = () => {
    return RNTreasureData.endSession();
};
TreasureData.endSession = (table) => {
    return RNTreasureData.endSession(table);
};
TreasureData.endSession = (table, database) => {
    return RNTreasureData.endSession(table, database);
};
TreasureData.getSessionId = () => {
    return RNTreasureData.getSessionId();
};
TreasureData.isFirstRun = () => {
    return RNTreasureData.isFirstRun();
};
TreasureData.clearFirstRun = () => {
    return RNTreasureData.clearFirstRun();
};
TreasureData.setSessionTimeoutMilli = (to) => {
    return RNTreasureData.setSessionTimeoutMilli(to);
};
export default TreasureData;
//# sourceMappingURL=index.js.map