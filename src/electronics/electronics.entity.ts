import { ID } from "@nestjs/graphql";
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";




@Entity()
export class Electronics {
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


