create table RestaurantRec (id bigint not null auto_increment, businessId varchar(50) not null, businessName varchar(255) not null, feature1 varchar(255), feature2 varchar(255), feature3 varchar(255), feature4 varchar(255), feature5 varchar(255), userId varchar(50) not null, primary key (id)) engine=MyISAM
create table WebsiteUser (id bigint not null auto_increment, email varchar(255), name varchar(255), primary key (id)) engine=MyISAM
create index IX_RestaurantRec_Uid on RestaurantRec (userId)
create index IX_RestaurantRec_Bid on RestaurantRec (businessId)

