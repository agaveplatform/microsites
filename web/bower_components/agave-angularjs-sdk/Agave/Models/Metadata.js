/**
 *agave.sdk
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

function Metadata() {
    this.associationIds = undefined
    this.created = undefined
    this.internalUsername = undefined
    this.lastUpdated = undefined
    this.name = undefined
    this.owner = undefined
    this.uuid = undefined
    this.value = undefined

}

//Make instanceof work


/**
 *UUIDs of associated Agave entities, including the Data to which this Metadata belongs.
 *
 * @return: array
 */
Metadata.prototype.getAssociationIds = function () {

    return this.associationIds;
}


Metadata.prototype.setAssociationIds = function (value) {
    this.associationIds = value;
}


/**
 *A timestamp indicating when this Metadata was created in the metadata store.
 *
 * @return: DateTime
 */
Metadata.prototype.getCreated = function () {

    return this.created;
}


Metadata.prototype.setCreated = function (value) {
    this.created = value;
}


/**
 *The name of the Internal User, if any, who owns this metadata.
 *
 * @return: string
 */
Metadata.prototype.getInternalUsername = function () {

    return this.internalUsername;
}


Metadata.prototype.setInternalUsername = function (value) {
    this.internalUsername = value;
}


/**
 *A timestamp indicating when this Metadata was last updated in the metadata store.
 *
 * @return: DateTime
 */
Metadata.prototype.getLastUpdated = function () {

    return this.lastUpdated;
}


Metadata.prototype.setLastUpdated = function (value) {
    this.lastUpdated = value;
}


/**
 *The name of this metadata
 *
 * @return: string
 */
Metadata.prototype.getName = function () {

    return this.name;
}


Metadata.prototype.setName = function (value) {
    this.name = value;
}


/**
 *The API user who owns this Metadata.
 *
 * @return: string
 */
Metadata.prototype.getOwner = function () {

    return this.owner;
}


Metadata.prototype.setOwner = function (value) {
    this.owner = value;
}


/**
 *The UUID for this Metadata.
 *
 * @return: string
 */
Metadata.prototype.getUuid = function () {

    return this.uuid;
}


Metadata.prototype.setUuid = function (value) {
    this.uuid = value;
}


/**
 *A free text or JSON string containing the metadata stored for the given associationIds
 *
 * @return: string
 */
Metadata.prototype.getValue = function () {

    return this.value;
}


Metadata.prototype.setValue = function (value) {
    this.value = value;
}
     





