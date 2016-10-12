select  productid, title, name, price, description, color, imageurl, quantity
from products
join image on products.productid = image.imageid

--where id = $1;


--          This query will take in an id and return
--                 all data for that product
