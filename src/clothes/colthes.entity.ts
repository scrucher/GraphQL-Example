import { Column } from 'typeorm';
import { PrimaryColumn } from 'typeorm';
import { ObjectIdColumn } from 'typeorm';
import { Entity } from 'typeorm';
@Entity()
export class Clothes {
    @ObjectIdColumn()
    _id: string;
    
    @PrimaryColumn()
    id: string;
    
    @Column()
    category: string;

    @Column()
    name: string;

    @Column()
    description: Date;

    @Column()
    price: Date
}