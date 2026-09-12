/* An interface is used to define the shape of an object */

export default interface IAddress {
    city: string;
    pin: number;
    location: { buildingName: string; streetNumber: number };
}
