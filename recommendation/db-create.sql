create table RestaurantRec (id bigint not null auto_increment, address varchar(255), businessId varchar(50) not null, businessName varchar(255) not null, categories varchar(255), city varchar(255), feature1 varchar(255), feature2 varchar(255), feature3 varchar(255), feature4 varchar(255), postalCode varchar(10), score1 float not null, score2 float not null, score3 float not null, score4 float not null, stars float not null, state varchar(255), userId varchar(50) not null, primary key (id)) engine=MyISAM
create table WebsiteUser (id bigint not null auto_increment, email varchar(255), name varchar(255), primary key (id)) engine=MyISAM
create index IX_RestaurantRec_Uid on RestaurantRec (userId)
create index IX_RestaurantRec_Bid on RestaurantRec (businessId)
