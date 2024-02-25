##### cls清屏

### 基本操作与新增数据

##### 连接mongodb

url:  "mongodb://admin:hzddsyhhh123@localhost:27017/";

mongo -u admin -p hzddsyhhh123

##### 查看数据库

show dbs;

##### 新增数据库,有了user表

use itying;

db.user.insert({"name": "xw", "age": 13})

##### 向数据库新增表admin

use itying;

db.admin.insertOne({"name": "hhh", "age": 20})

##### 查看某个数据库中的表

use itying;

show collections;

##### 删除itying数据库

use itying;

db.dropDatabase();

##### 删除数据库中的表user

use itying;

db.user.drop();

### 查询

#### 一般查询

##### 查询user表中年龄为13的

db.user.find({"age": 13})

##### 查询年龄为22， 名字为zhangsan的

db.user.find({"age": 13, "name": "zhangsan"})

##### 查询年龄大于22的

db.user.find({"age": {$gt: 22}})

##### 查询年龄小于22的

db.user.find({"age": {$lt: 22}})

##### 查询年龄大于等于22的

db.user.find({"age":: {$gte: 22}})

##### 查询年龄小于等于22的

db.user.find({"age": {$lte: 22}})

##### 查询年龄大于等于22，小于等于26的

db.user.find({"age": {$gte: 22, $lte: 26}})



#### 模糊查询

##### 查询name里面包含zhang的(两个都可)

db.user.find({"name": /zhang/})

db.user.find({"name": { $regex: "zhang" }})

##### 查询name以z开头的

db.user.find({"name": /^z/})

##### 查询name中以n结尾的

db.user.find({"name": /n$/})



#### 查询结果的显示（指定列查询）

##### 查询age等于20的，且只显示age

db.user.find({"age": 20}, {age: 1})

##### 查询age等于20的，且显示name和age

db.user.find({"age": 20}, {"name": 1, "age": 1})



#### 升序降序(1:升序， -1:降序)

##### 按照查到的name升序

db.user.find().sort({"age": 1})



#### 查询数量的限制(分页查询)

##### 查询前两条数据

db.user.find().limit(2)

##### 查询跳过前两条的数据数据

db.user.find().skip(2)

##### 查询第六条和第七条的数据

db.user.find().skip(5).limit(2)



#### 新增99条数据

for(var i = 1; i < 100; i++){

​	db.admin.insert({"username": "zhangsan" + i, "age": i})

};

db.admin.find();  // 一次最多加载20条数据

##### 用it来翻页



#### 查看查到的数据的数量

db.admin.find().count();

#### 条件查询or

##### 查name等于wangwu或者name等于lisi的数据

db.admin.find({$or: [{"name": "wangwu"}, {"name": "lisi"}]})

#### 查找一条数据findOne

db.admin.findOne()



### 修改数据

##### 把name为zhangsan，修改为name为张三

db.user.update({"name": "zhangsan"}, {$set: {"name": "张三"}})

##### 把name为zhangsan,age为13的数据，更新name为张三，加个sex:"男"（新增字段）

db.user.update({"name": "zhangsan", "age": 13}, {$set: {"sex": "男", "name": "张三"}})

##### 不加$set,表示替换,将name为zhangsan的里面的所有数据，替换成name为wangwu （只修改成一条数据）

db.user.update({"name": "zhangsan"}, {"name": "wangwu"})

##### 修改多条数据

db.user.update({"age": 13}, {$set: {"sex": "男"}}, {multi: true})



### 删除数据（deleteOne, deleteMany）

##### 删除name为wangwu的所有数据

db.user.remove({"name": "wangwu"})

##### 删除age大于三十的数据

db.admin.remove({"age": {$gt: 30}})

##### 只删除一条age大于三十的数据

db.admin.remove({"age": {$gt: 30}}, {justOne: true})



### 设置索引（加快查询速度）

##### 获取查询消耗的时间

db.user.find({"username": "zhangsan"}).explain("executionStats")

##### 获取user集合的索引

db.user.getIndexs()

##### 给user表设置索引(1:升序， -1： 降序)

db.user.ensureIndex({"username": 1})

##### 删除user表的索引

db.user.dropIndex({"username": 1})

#### 复合索引

##### 设置复合索引

db.user.ensureIndex({"username": 1, "age": -1})

##### 在上述设置的前提下，在查询的时候

db.user.find({"age": 30, "username": "wangwu"})   // 会命中索引

db.user.find({"age": 30})   // 会命中索引

db.user.find({"username": "zhangsan"})  // 不会命中索引

##### 设置索引的时候指定名字

db.user.ensureIndex({"username": 1}, {"name": "userIndex"})

#### 唯一索引

db.user.ensureIndex({"age": 1}, {"unique": true})  // 表示age的数值不能重复



### mongodb账户权限配置

https://blog.csdn.net/hh3167253066/article/details/119113998?spm=1001.2014.3001.5502



### 关系型数据中表与表之间的关系

#### 一对一



#### 一对多

商品分类对应这一类中的多个商品

#### 多对多

一个学生可以选择多门课程，同一门课可以被多个学生选修



### mongodb中的聚合管道

对集合中的文档进行变换和组合（官网实例）

用来表关联查询，数据的统计

match匹配status为A的

groud将其进行cust_id分组按照,分组后按照amount求和，设为total

![20210731164718](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210731164718.png)

##### 常用管道操作符

| 管道操作符 | description                                                  | 用处                                     |
| :--------- | ------------------------------------------------------------ | ---------------------------------------- |
| $project   | 增加，删除，重命名字段                                       | 对列进行操作，字段筛选（显示指定的列等） |
| $match     | 条件匹配，满足条件的才能进入下一阶段                         | 过滤结果                                 |
| $limit     | 限制结果数量                                                 |                                          |
| $skip      | 跳过文档的数量                                               |                                          |
| $sort      | 查找结果的排序                                               |                                          |
| $group     | 条件组合结果，统计                                           | 对数据进行分组，统计                     |
| $lookup    | $lookup操作符，用来引入其他集合的数据                        | 表关联查询                               |
| $unwind    | 将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。 |                                          |

##### 只显示order_id与all_price字段（列）: $project

db.order.find({}, {"order_id": 1, "all_price": 1})

用管道符

db.order.aggregate([

​	{ $project: {order_id: 1, all_price: 1} }

])

##### 只显示order_id与all_price字段，并且筛选all_price大于等于90的数据$match

db.order.aggregate([

​	{ $project: {order_id: 1, all_price: 1} }

​	{ $match: {"all_price": {$gte: 90}} }

])

##### 统计order_id相同的，里面的num个数的总和（group）

| 聚合表达式 | 描述                                           | 实例                                                         |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------ |
| $sum       | 计算总和                                       | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}]) |
| $avg       | 计算平均值                                     | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}]) |
| $min       | 获取集合中所有文档对应值得最小值。             | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}]) |
| $max       | 获取集合中所有文档对应值得最大值。             | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}]) |
| $push      | 在结果文档中插入值到一个数组中。               | db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}]) |
| $addToSet  | 在结果文档中插入值到一个数组中，但不创建副本。 | db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}]) |
| $first     | 根据资源文档的排序获取第一个文档数据。         | db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}]) |
| $last      | 根据资源文档的排序获取最后一个文档数据         | db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}]) |

db.order_item.aggregate([

​	{ $group: {_id: "$order_id", total: {$sum: "$num"}} }

])

以order_id进行分组，统计num的和，结果显示

#####  ![20210731171932](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210731171932.png)

##### 结果的降序排列 $sort, $limit限制数量，$skip:跳过几条数据

db.order.aggregate([

​	{ $project: {order_id: 1, all_price: 1} }

​	{ $match: {"all_price": {$gte: 90}} }

​	{ $sort: {"all_price": -1} }

​	{ $skip: 1 }

​	{ $limit: 5 }

])

##### 表的关联操作  $lookup

![20210731172650](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210731172650.png)

```cmd
db.order.aggregate([
	{
		$lookup:
		{
			from: "order_item",
			localField: "order_id",
			foreignField: "order_id",
			as: "items"
		}
	}
])
// order为主表
// form: 表示order表要关联的表
// localField: 表示order表中要关联的字段，
// foreignField: 表示要关联的prder_item表中的字段
// as: 关联后的数据做为items字段放在order表里
```

![20210731173518](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210731173518.png)

##### 管道操作符再进行筛选

```cmd
db.order.aggregate([
	{
		$lookup:
		{
			from: "order_item",
			localField: "order_id",
			foreignField: "order_id",
			as: "items"
		}
	}
	{
		$match: {"all_price": {$gte: 90}}
	}
])
```

##### unwind

![image-20210731180343835](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210731180343835.png)

### mongodb数据库的备份与还原

##### mongodb数据库导出备份语法



**cmd中**     mongodump -h 192.168.124.2 -d itynig -o dbdirectory

-h:指定ip地址

-d: 指定要导出的数据库的名称

-o: 指定导出文件保存的路径![20210731174623](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210731174623.png)

##### 备份的数据导入数据库

**cmd中**    mongorestore -h dbhost -d dbname dbdirectory

