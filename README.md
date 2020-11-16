Hello world! 

To add a migration to the database, execute these:
```
npx prisma migrate save --experimental
```
this command generates migration files to check everything is correct.



Finally, to apply these migrations, we type: 
```
npx prisma migrate up --experimental
```