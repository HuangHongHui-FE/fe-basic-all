



mysql笔记

### 常见命令

管理员运行

net start  mysql80

net stop mysql80

mysql -V

##### 登录

mysql -h localhost -u root -p  回车

123456

##### 退出登录

exit

##### 基础

show databases;

use test;

show tables;

show tables from mysql;

## 查询

#### 1.基础查询

use myemployees;

##### 查询表中多个字段

select last_name, salary, email from employees;

##### 查询表中的所有字段

 SELECT * FROM employees;

##### 查询函数

SELECT VERSION();

##### 起别名

1. SELECT last_name AS 姓,first_name AS 名 FROM employees;
2. SELECT last_name 姓,first_name 名 FROM employees;

##### 去重

查询员工表中涉及到的所有的部门编号

SELECT DISTINCT department_id FROM employees;

##### +的作用

1. select 100+90; 两个操作数都为数值型，则做加法运算
2. select '123'+90;只要其中一方为字符型，试图将字符型数值转换成数值型，如果转换成功，则继续做加法运算，如果转换失败，则将字符型数值转换成0
3. select null+10; 只要其中一方为null，则结果肯定为null

#### 2.条件查询

简单条件运算符：>  <  =   !=    <>    >=     <=

逻辑运算符：and or not             && || !     

模糊查询： like            between   and            in              is null

##### 查询部门编号不等于90号的员工名和部门编号

```mysql
SELECT 
	last_name,
	department_id
FROM
	employees
WHERE
	department_id <> 90;
```

##### 查询部门编号不是在90到110之间，或者工资高于15000的员工信息

```mysql
SELECT
	*
FROM
	employees
WHERE
	NOT(department_id >= 90 AND  department_id <= 110) OR salary>15000;
```

##### 模糊查询

模糊查询： like            between and            in              is null

通配符：% 任意多个字符,包含0个字符                       _ 任意单个字符

##### 查询员工名中第二个字符为_的员工名

```mysql
SELECT
	last_name
FROM
	employees
WHERE
	last_name LIKE '_$_%' ESCAPE '$';
```

##### between and

两个临界值不要调换顺序

##### 查询员工编号在100到120之间的员工信息

```mysql
SELECT
	*
FROM
	employees
WHERE
	employee_id BETWEEN 100 AND 120;
```

##### in

##### 查询员工的工种编号是 IT_PROG、AD_VP、AD_PRES中的一个员工名和工种编号

```mysql
SELECT
	last_name,
	job_id
FROM
	employees
WHERE
	job_id IN( 'IT_PROT' ,'AD_VP','AD_PRES');
```

##### is null

- =或<>不能用于判断null值
- is null或is not null 可以判断null值
- <=>    :既可以判断NULL值，又可以判断普通的数值，可读性较低

#### 3.排序查询

asc代表的是升序，可以省略
desc代表的是降序

##### 查询部门编号>=90的员工信息，并按员工编号降序

```mysql
SELECT *
FROM employees
WHERE department_id>=90
ORDER BY employee_id DESC;
```

##### 查询员工信息 按年薪降序

```mysql
SELECT *,salary*12*(1+IFNULL(commission_pct,0))
FROM employees
ORDER BY salary*12*(1+IFNULL(commission_pct,0)) DESC;
```

##### 查询员工信息，要求先按工资降序，再按employee_id升序

```mysql
SELECT *
FROM employees
ORDER BY salary DESC,employee_id ASC;
```

#### 4.常见函数

##### 字符函数

| 函数名  | 作用                                      |                                                              |
| ------- | ----------------------------------------- | ------------------------------------------------------------ |
| length  | 获取字节长度                              | SELECT LENGTH('john');                                       |
| concat  | 拼接字符串                                | SELECT CONCAT(last_name,'_',first_name) 姓名 FROM employees; |
| substr  | 字符串截取                                |                                                              |
| instr   | 返回子串第一次出现的索引，如果找不到返回0 |                                                              |
| trim    |                                           |                                                              |
| upper   | 变大写                                    | SELECT UPPER('john');                                        |
| lower   | 变小写                                    |                                                              |
| lpad    | 用指定的字符实现左填充指定长度            | SELECT LPAD('殷素素',2,'*') AS out_put;                      |
| rpad    | 用指定的字符实现右填充指定长度            |                                                              |
| replace | 替换                                      | SELECT REPLACE('周芷若周芷若周芷若周芷若张无忌爱上了周芷若','周芷若','赵敏') AS out_put; |

##### 数学函数

| 函数名   |                                  |                             |
| -------- | -------------------------------- | --------------------------- |
| round    | 四舍五入                         | SELECT ROUND(-1.55);        |
| ceil     | 向上取整,返回>=该参数的最小整数  | SELECT CEIL(-1.02);         |
| floor    | 向下取整，返回<=该参数的最大整数 | SELECT FLOOR(-9.99);        |
| truncate | 截断                             | SELECT TRUNCATE(1.69999,1); |
| mod      | 取余                             | mod(a,b) ：  a-a/b*b        |

##### 日期函数

| 函数名      | 功能                                 |                                                       |
| ----------- | ------------------------------------ | ----------------------------------------------------- |
| now         | now 返回当前系统日期+时间            | SELECT NOW();                                         |
| curdate     | curdate 返回当前系统日期，不包含时间 | SELECT CURDATE();                                     |
| curtime     | curtime 返回当前时间，不包含日期     | SELECT CURTIME();                                     |
| year        |                                      | SELECT YEAR(NOW()) 年;                                |
| month       |                                      | SELECT MONTH(NOW()) 月;                               |
| monthname   |                                      | SELECT MONTHNAME(NOW()) 月;                           |
| day         |                                      |                                                       |
| hour        |                                      |                                                       |
| minute      |                                      |                                                       |
| second      |                                      |                                                       |
| str_to_date | 将字符通过指定的格式转换成日期       | SELECT STR_TO_DATE('1998-3-2','%Y-%c-%d') AS out_put; |
| date_format | 将日期转换成字符                     |                                                       |

##### substr截取从指定索引处后面所有字符(索引从一开始)

```mysql
SELECT SUBSTR('李莫愁爱上了陆展元',7)  out_put;
```

##### 截取从指定索引处指定字符长度的字符

```mysql
SELECT SUBSTR('李莫愁爱上了陆展元',1,3) out_put;
```

##### instr 返回子串第一次出现的索引，如果找不到返回0

```
SELECT INSTR('杨不殷六侠悔爱上了殷六侠','殷八侠') AS out_put;
```

##### trim  

```mysql
SELECT LENGTH(TRIM('    张翠山    ')) AS out_put;

SELECT TRIM('aa' FROM 'aaaaaaaaa张aaaaaaaaaaaa翠山aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')  AS out_put;
```

##### 其他函数

```mysql
SELECT VERSION();
SELECT DATABASE();
SELECT USER();
```

##### 流程控制函数

##### if  -else

```mysql
SELECT IF(10<5,'大','小');
SELECT last_name,commission_pct,IF(commission_pct IS NULL,'没奖金，呵呵','有奖金，嘻嘻') 备注
FROM employees;
```

##### when

##### 查询员工的工资的情况如果工资>20000,显示A级别,如果工资>15000,显示B级别,如果工资>10000，显示C级别,否则，显示D级别

```
SELECT salary,
CASE 
WHEN salary>20000 THEN 'A'
WHEN salary>15000 THEN 'B'
WHEN salary>10000 THEN 'C'
ELSE 'D'
END AS 工资级别
FROM employees;
```

#### 分组函数

和分组函数一同查询的字段有限制

sum 求和、avg 平均值、max 最大值 、min 最小值 、count 计算个数

##### 使用count(*)用作统计行数

##### distinct搭配

SELECT SUM(DISTINCT salary),SUM(salary) FROM employees;

#### 分组查询groud by

能用分组前筛选的，尽量使用分组前筛选，提高效率

##### 查询每个工种的员工平均工资

```mysql
SELECT AVG(salary),job_id
FROM employees
GROUP BY job_id;
```

##### 分组前的筛选

##### 查询邮箱中包含a字符的 每个部门的最高工资

```mysql
SELECT MAX(salary),department_id
FROM employees
WHERE email LIKE '%a%'
GROUP BY department_id;
```

##### 分组后筛选

##### 查询哪个部门的员工个数>5

1. ①查询每个部门的员工个数

   ```mysql
   SELECT COUNT(*),department_id
   FROM employees
   GROUP BY department_id;
   ```

2.  ② 筛选刚才①结果

   ```mysql
   SELECT COUNT(*),department_id
   FROM employees
   
   GROUP BY department_id
   
   HAVING COUNT(*)>5;
   ```

##### 按多个字段分组

##### 查询每个工种每个部门的最低工资,并按最低工资降序

```mysql
SELECT MIN(salary),job_id,department_id
FROM employees
GROUP BY department_id,job_id
ORDER BY MIN(salary) DESC;
```

#### 连接查询（多表查询）sql99标准

##### 分为

内连接：
			等值连接
			非等值连接
			自连接
		外连接：
			左外连接
			右外连接
			全外连接

​		交叉连接

##### 语法

```mysql
select 查询列表
	from 表1 别名 【连接类型】
	join 表2 别名 
	on 连接条件
	【where 筛选条件】
	【group by 分组】
	【having 筛选条件】
	【order by 排序列表】
```

内连接（★）：inner
外连接
	左外(★):left 【outer】
	右外(★)：right 【outer】
	全外：full【outer】
交叉连接：cross 

##### 内连接(等值连接)

```
select 查询列表
from 表1 别名
join 表2 别名
on 连接条件;
```

##### 查询员工名、部门名

```mysql
SELECT last_name,department_name
FROM departments d
INNER JOIN employees e
ON e.`department_id` = d.`department_id`;
```

##### 查询名字中包含e的员工名和工种名

```mysql
SELECT last_name,job_title
FROM employees e
INNER JOIN jobs j
ON e.`job_id`=  j.`job_id`
WHERE e.`last_name` LIKE '%e%';
```

##### 查询部门个数>3的城市名和部门个数

```mysql
SELECT city,COUNT(*) 部门个数
FROM departments d
INNER JOIN locations l
ON d.`location_id`=l.`location_id`
GROUP BY city
HAVING COUNT(*)>3;
```

##### 查询哪个部门的员工个数>3的部门名和员工个数，并按个数降序

```mysql
#①查询每个部门的员工个数
SELECT COUNT(*),department_name
FROM employees e
INNER JOIN departments d
ON e.`department_id`=d.`department_id`
GROUP BY department_name


#② 在①结果上筛选员工个数>3的记录，并排序

SELECT COUNT(*) 个数,department_name
FROM employees e
INNER JOIN departments d
ON e.`department_id`=d.`department_id`
GROUP BY department_name
HAVING COUNT(*)>3
ORDER BY COUNT(*) DESC;
```

##### 查询员工名、部门名、工种名，并按部门名降序（添加三表连接）

```mysql
SELECT last_name,department_name,job_title
FROM employees e
INNER JOIN departments d ON e.`department_id`=d.`department_id`
INNER JOIN jobs j ON e.`job_id` = j.`job_id`
ORDER BY department_name DESC;
```

##### 内连接（非等值连接）

##### 查询员工的工资级别

```mysql
SELECT salary,grade_level
FROM employees e
 JOIN job_grades g
 ON e.`salary` BETWEEN g.`lowest_sal` AND g.`highest_sal`;
```

##### 查询工资级别的个数>20的个数，并且按工资级别降序

```mysql
SELECT COUNT(*),grade_level
FROM employees e
JOIN job_grades g
ON e.`salary` BETWEEN g.`lowest_sal` AND g.`highest_sal`
GROUP BY grade_level
HAVING COUNT(*)>20
ORDER BY grade_level DESC;
```

##### 内连接（自连接）

##### 查询员工的名字、上级的名字

```mysql
 SELECT e.last_name,m.last_name
 FROM employees e
 JOIN employees m
 ON e.`manager_id`= m.`employee_id`;
```

##### 查询姓名中包含字符k的员工的名字、上级的名字

```mysql
 SELECT e.last_name,m.last_name
 FROM employees e
 JOIN employees m
 ON e.`manager_id`= m.`employee_id`
 WHERE e.`last_name` LIKE '%k%';
```

##### 外连接

用于查询一个表中有，另一个表没有的记录

##### 特点

1. 外连接的查询结果为主表中的所有记录
   	如果从表中有和它匹配的，则显示匹配的值
   	如果从表中没有和它匹配的，则显示null
   	外连接查询结果=内连接结果+主表中有而从表没有的记录
2. 左外连接，left join左边的是主表
       右外连接，right join右边的是主表
3. 全外连接 = 内连接的结果 + 表1中有但表2没有的 + 表2中有但表1没有的

##### 查询哪个部门没有员工

```mysql
 #左外
 SELECT d.*,e.employee_id
 FROM departments d
 LEFT OUTER JOIN employees e
 ON d.`department_id` = e.`department_id`
 WHERE e.`employee_id` IS NULL;
```

```mysql
 #右外
 SELECT d.*,e.employee_id
 FROM employees e
 RIGHT OUTER JOIN departments d
 ON d.`department_id` = e.`department_id`
 WHERE e.`employee_id` IS NULL;
```

```mysql
 #全外
 USE girls;
 SELECT b.*,bo.*
 FROM beauty b
 FULL OUTER JOIN boys bo
 ON b.`boyfriend_id` = bo.id;
```

```mysql
 #交叉连接
 SELECT b.*,bo.*
 FROM beauty b
 CROSS JOIN boys bo;
```

### 分页查询

```mysql
语法：
	select 查询列表
	from 表
	【join type join 表2
	on 连接条件
	where 筛选条件
	group by 分组字段
	having 分组后的筛选
	order by 排序的字段】
	limit 【offset,】size;
	
	offset要显示条目的起始索引（起始索引从0开始）
	size 要显示的条目个数
```

##### 查询前五条员工信息

```mysql
SELECT * FROM  employees LIMIT 0,5;
SELECT * FROM  employees LIMIT 5;
```

##### 查询第11条——第25条

```mysql
SELECT * FROM  employees LIMIT 10,15;
```

##### 有奖金的员工信息，并且工资较高的前10名显示出来

```mysql
SELECT * FROM employees 
WHERE commission_pct IS NOT NULL 
ORDER BY salary DESC 
LIMIT 10 ;
```

### 子查询

出现在其他语句中的select语句，称为子查询或内查询
外部的查询语句，称为主查询或外查询

##### 分类

```
分类：
按子查询出现的位置：
select后面：
	仅仅支持标量子查询

from后面：
	支持表子查询
where或having后面：★
	标量子查询（单行） √
	列子查询  （多行） √
	行子查询
	
exists后面（相关子查询）
	表子查询

按结果集的行列数不同：
	标量子查询（结果集只有一行一列）
	列子查询（结果集只有一列多行）
	行子查询（结果集有一行多列）
	表子查询（结果集一般为多行多列）
```

```
#一、where或having后面
/*
1、标量子查询（单行子查询）
2、列子查询（多行子查询）

3、行子查询（多列多行）

特点：
①子查询放在小括号内
②子查询一般放在条件的右侧
③标量子查询，一般搭配着单行操作符使用
> < >= <= = <>

列子查询，一般搭配着多行操作符使用
in、any/some、all

④子查询的执行优先于主查询执行，主查询的条件用到了子查询的结果

```

##### 标量子查询

##### 谁的工资比 Abel 高?

```mysql
#①查询Abel的工资
SELECT salary
FROM employees
WHERE last_name = 'Abel'

#②查询员工的信息，满足 salary>①结果
SELECT *
FROM employees
WHERE salary>(

	SELECT salary
	FROM employees
	WHERE last_name = 'Abel'
);
```

##### 返回job_id与141号员工相同，salary比143号员工多的员工 姓名，job_id 和工资

```mysql
#①查询141号员工的job_id
SELECT job_id
FROM employees
WHERE employee_id = 141

#②查询143号员工的salary
SELECT salary
FROM employees
WHERE employee_id = 143

#③查询员工的姓名，job_id 和工资，要求job_id=①并且salary>②

SELECT last_name,job_id,salary
FROM employees
WHERE job_id = (
	SELECT job_id
	FROM employees
	WHERE employee_id = 141
) AND salary>(
	SELECT salary
	FROM employees
	WHERE employee_id = 143
);
```

##### 返回公司工资最少的员工的last_name,job_id和salary

```mysql
#①查询公司的 最低工资
SELECT MIN(salary)
FROM employees

#②查询last_name,job_id和salary，要求salary=①
SELECT last_name,job_id,salary
FROM employees
WHERE salary=(
	SELECT MIN(salary)
	FROM employees
);
```

##### 列子查询

```mysql
#案例1：返回location_id是1400或1700的部门中的所有员工姓名

#①查询location_id是1400或1700的部门编号
SELECT DISTINCT department_id
FROM departments
WHERE location_id IN(1400,1700)

#②查询员工姓名，要求部门号是①列表中的某一个

SELECT last_name
FROM employees
WHERE department_id  <>ALL(
	SELECT DISTINCT department_id
	FROM departments
	WHERE location_id IN(1400,1700)
);
```

```mysql
#案例3：返回其它部门中比job_id为‘IT_PROG’部门所有工资都低的员工   的员工号、姓名、job_id 以及salary

SELECT last_name,employee_id,job_id,salary
FROM employees
WHERE salary<ALL(
	SELECT DISTINCT salary
	FROM employees
	WHERE job_id = 'IT_PROG'

) AND job_id<>'IT_PROG';
```

##### 行子查询

```mysql
#案例：查询员工编号最小并且工资最高的员工信息
SELECT * 
FROM employees
WHERE (employee_id,salary)=(
	SELECT MIN(employee_id),MAX(salary)
	FROM employees
);

#①查询最小的员工编号
SELECT MIN(employee_id)
FROM employees


#②查询最高工资
SELECT MAX(salary)
FROM employees


#③查询员工信息
SELECT *
FROM employees
WHERE employee_id=(
	SELECT MIN(employee_id)
	FROM employees

)AND salary=(
	SELECT MAX(salary)
	FROM employees

);
```

##### exists后面，相关子查询

```mysql
#四、exists后面（相关子查询）

/*
语法：
exists(完整的查询语句)
结果：
1或0
*/

SELECT EXISTS(SELECT employee_id FROM employees WHERE salary=300000);

#案例1：查询有员工的部门名

#in
SELECT department_name
FROM departments d
WHERE d.`department_id` IN(
	SELECT department_id
	FROM employees
)

#exists

SELECT department_name
FROM departments d
WHERE EXISTS(
	SELECT *
	FROM employees e
	WHERE d.`department_id`=e.`department_id`


);

```

### 联合查询

union 联合 合并：将多条查询语句的结果合并成一个结果

应用场景：
要查询的结果来自于多个表，且多个表没有直接的连接关系，但查询的信息一致时

特点：★
1、要求多条查询语句的查询列数是一致的！
2、要求多条查询语句的查询的每一列的类型和顺序最好一致
3、union关键字默认去重，如果使用union all 可以包含重复项

```mysql
#引入的案例：查询部门编号>90或邮箱包含a的员工信息

SELECT * FROM employees WHERE email LIKE '%a%' OR department_id>90;;

SELECT * FROM employees  WHERE email LIKE '%a%'
UNION
SELECT * FROM employees  WHERE department_id>90;
```

```mysql
#案例：查询中国用户中男性的信息以及外国用户中年男性的用户信息

SELECT id,cname FROM t_ca WHERE csex='男'
UNION ALL
SELECT t_id,tname FROM t_ua WHERE tGender='male';
```

### 数据插入

```mysql
#1.插入的值的类型要与列的类型一致或兼容
INSERT INTO beauty(id,NAME,sex,borndate,phone,photo,boyfriend_id)
VALUES(13,'唐艺昕','女','1990-4-23','1898888888',NULL,2);
```

```mysql
#2.不可以为null的列必须插入值。可以为null的列如何插入值？
#方式一：
INSERT INTO beauty(id,NAME,sex,borndate,phone,photo,boyfriend_id)
VALUES(13,'唐艺昕','女','1990-4-23','1898888888',NULL,2);
```

```mysql
INSERT INTO beauty
VALUES(23,'唐艺昕1','女','1990-4-23','1898888888',NULL,2)
,(24,'唐艺昕2','女','1990-4-23','1898888888',NULL,2)
,(25,'唐艺昕3','女','1990-4-23','1898888888',NULL,2);
```

### 数据的修改

```mysql
#1.修改单表的记录
#案例1：修改beauty表中姓唐的女神的电话为13899888899

UPDATE beauty SET phone = '13899888899'
WHERE NAME LIKE '唐%';

#案例2：修改boys表中id好为2的名称为张飞，魅力值 10
UPDATE boys SET boyname='张飞',usercp=10
WHERE id=2;
```

```mysql
#2.修改多表的记录
#案例 1：修改张无忌的女朋友的手机号为114

UPDATE boys bo
INNER JOIN beauty b ON bo.`id`=b.`boyfriend_id`
SET b.`phone`='119',bo.`userCP`=1000
WHERE bo.`boyName`='张无忌';

#案例2：修改没有男朋友的女神的男朋友编号都为2号

UPDATE boys bo
RIGHT JOIN beauty b ON bo.`id`=b.`boyfriend_id`
SET b.`boyfriend_id`=2
WHERE bo.`id` IS NULL;

SELECT * FROM boys;
```

#### 删除语句

```mysql
#1.单表的删除
#案例：删除手机号以9结尾的女神信息

DELETE FROM beauty WHERE phone LIKE '%9';
SELECT * FROM beauty;
```

```mysql
#2.多表的删除
#案例：删除张无忌的女朋友的信息
DELETE b
FROM beauty b
INNER JOIN boys bo ON b.`boyfriend_id` = bo.`id`
WHERE bo.`boyName`='张无忌';
```

```mysql
#方式二：truncate语句

#案例：将魅力值>100的男神信息删除
TRUNCATE TABLE boys ;
```

1. delete 可以加where 条件，truncate不能加

2. truncate删除，效率高一丢丢
3. 假如要删除的表中有自增长列，
   如果用delete删除后，再插入数据，自增长列的值从断点开始，
   而truncate删除后，再插入数据，自增长列的值从1开始。
4. truncate删除没有返回值，delete删除有返回值
5. truncate删除不能回滚，delete删除可以回滚.

### 库和表的管理

```mysql
#案例：创建库Books

CREATE DATABASE IF NOT EXISTS books ;
```

```mysql
#2、库的修改
RENAME DATABASE books TO 新库名;

#更改库的字符集
ALTER DATABASE books CHARACTER SET gbk;

#3、库的删除
DROP DATABASE IF EXISTS books;
```

#### 表的管理

```mysql
#案例：创建表Book

CREATE TABLE book(
	id INT,  #编号
	bName VARCHAR(20),  #图书名
	price DOUBLE,  #价格
	authorId  INT,  #作者编号
	publishDate DATETIME  #出版日期

);
DESC book;
```

```mysql
#①修改列名
ALTER TABLE book CHANGE COLUMN publishDate pubDate DATETIME;

#②修改列的类型或约束
ALTER TABLE book MODIFY COLUMN pubdate TIMESTAMP;

#③添加新列
ALTER TABLE author ADD COLUMN annual DOUBLE; 

#④删除列
ALTER TABLE book_author DROP COLUMN  annual;

#⑤修改表名
ALTER TABLE author RENAME TO book_author;

DESC book;
```

```mysql
#3.表的删除
DROP TABLE IF EXISTS book_author;
SHOW TABLES;
```

```mysql
#通用的写法：

DROP DATABASE IF EXISTS 旧库名;
CREATE DATABASE 新库名;


DROP TABLE IF EXISTS 旧表名;
CREATE TABLE  表名();
```

```mysql
#4.表的复制
#1.仅仅复制表的结构

CREATE TABLE copy LIKE author;

#2.复制表的结构+数据
CREATE TABLE copy2
SELECT * FROM author;

#只复制部分数据
CREATE TABLE copy3
SELECT id,au_name
FROM author 
WHERE nation='中国';

#仅仅复制某些字段
CREATE TABLE copy4 
SELECT id,au_name
FROM author
WHERE 0;
```

### 数据类型

##### 整形

分类：
tinyint、smallint、mediumint、int/integer、bigint

特点：
① 如果不设置无符号还是有符号，默认是有符号，如果想设置无符号，需要添加unsigned关键字
② 如果插入的数值超出了整型的范围,会报out of range异常，并且插入临界值
③ 如果不设置长度，会有默认的长度
长度代表了显示的最大宽度，如果不够会用0在左边填充，但必须搭配zerofill使用！

```mysql
#1.如何设置无符号和有符号

DROP TABLE IF EXISTS tab_int;
CREATE TABLE tab_int(
	t1 INT(7) ZEROFILL,
	t2 INT(7) ZEROFILL 
);
DESC tab_int;
```

##### 小数

分类：
1.浮点型
float(M,D)             double(M,D)
2.定点型
dec(M，D)            decimal(M,D)

特点：

①
M：整数部位+小数部位
D：小数部位
如果超过范围，则插入临界值

②
M和D都可以省略
如果是decimal，则M默认为10，D默认为0
如果是float和double，则会根据插入的数值的精度来决定精度

③定点型的精确度较高，如果要求插入数值的精度较高如货币运算等则考虑使用

```mysql
#测试M和D
DROP TABLE tab_float;
CREATE TABLE tab_float(
	f1 FLOAT,
	f2 DOUBLE,
	f3 DECIMAL
);
SELECT * FROM tab_float;
DESC tab_float;
```

##### 字符型

较短的文本：char           varchar

其他：

1. binary和varbinary用于保存较短的二进制
2. enum用于保存枚举
3. set用于保存集合

较长的文本：

1. text
2. blob(较大的二进制)

```mysql
CREATE TABLE tab_char(
	c1 ENUM('a','b','c')
);


INSERT INTO tab_char VALUES('a');
INSERT INTO tab_char VALUES('b');
INSERT INTO tab_char VALUES('c');
INSERT INTO tab_char VALUES('m');
INSERT INTO tab_char VALUES('A');

SELECT * FROM tab_set;

CREATE TABLE tab_set(
	s1 SET('a','b','c','d'
);
INSERT INTO tab_set VALUES('a');
INSERT INTO tab_set VALUES('A,B');
INSERT INTO tab_set VALUES('a,c,d');

```

##### 日期型

分类：
date只保存日期
time 只保存时间
year只保存年

datetime保存日期+时间
timestamp保存日期+时间

```mysql
CREATE TABLE tab_date(
	t1 DATETIME,
	t2 TIMESTAMP
);

INSERT INTO tab_date VALUES(NOW(),NOW());

SELECT * FROM tab_date;


SHOW VARIABLES LIKE 'time_zone';

SET time_zone='+9:00';
```

### 标识列

又称为自增长列
含义：可以不用手动的插入值，系统提供默认的序列值

特点：
1、标识列必须和主键搭配吗？不一定，但要求是一个key
2、一个表可以有几个标识列？至多一个！
3、标识列的类型只能是数值型
4、标识列可以通过 SET auto_increment_increment=3;设置步长
可以通过 手动插入值，设置起始值

```mysql
#一、创建表时设置标识列

DROP TABLE IF EXISTS tab_identity;
CREATE TABLE tab_identity(
	id INT  ,
	NAME FLOAT UNIQUE AUTO_INCREMENT,
	seat INT 
);
TRUNCATE TABLE tab_identity;

INSERT INTO tab_identity(id,NAME) VALUES(NULL,'john');
INSERT INTO tab_identity(NAME) VALUES('lucy');
SELECT * FROM tab_identity;

SHOW VARIABLES LIKE '%auto_increment%';

SET auto_increment_increment=3;
```

### 常见约束

一种限制，用于限制表中的数据，为了保证表中的数据的准确和可靠性

分类：六大约束
	NOT NULL：非空，用于保证该字段的值不能为空
	比如姓名、学号等
	DEFAULT:默认，用于保证该字段有默认值
	比如性别
	PRIMARY KEY:主键，用于保证该字段的值具有唯一性，并且非空
	比如学号、员工编号等
	UNIQUE:唯一，用于保证该字段的值具有唯一性，可以为空
	比如座位号
	CHECK:检查约束【mysql中不支持】
	比如年龄、性别
	FOREIGN KEY:外键，用于限制两个表的关系，用于保证该字段的值必须来自于主表的关联列的值

添加约束的时机：
	1.创建表时
	2.修改表时

约束的添加分类：
	列级约束：
		六大约束语法上都支持，但外键约束没有效果

​	表级约束：
​		除了非空、默认，其他的都支持

主键和唯一的大对比：

		保证唯一性  是否允许为空    一个表中可以有多少个   是否允许组合
	主键	√		×		至多有1个           √，但不推荐
	唯一	√		√		可以有多个          √，但不推荐
外键：
	1、要求在从表设置外键关系
	2、从表的外键列的类型和主表的关联列的类型要求一致或兼容，名称无要求
	3、主表的关联列必须是一个key（一般是主键或唯一）
	4、插入数据时，先插入主表，再插入从表
	删除数据时，先删除从表，再删除主表

```mysql
CREATE TABLE 表名(
	字段名 字段类型 列级约束,
	字段名 字段类型,
	表级约束

)
```

```mysql
#一、创建表时添加约束
USE students;
DROP TABLE stuinfo;
CREATE TABLE stuinfo(
	id INT PRIMARY KEY,#主键
	stuName VARCHAR(20) NOT NULL UNIQUE,#非空
	gender CHAR(1) CHECK(gender='男' OR gender ='女'),#检查
	seat INT UNIQUE,#唯一
	age INT DEFAULT  18,#默认约束
	majorId INT REFERENCES major(id)#外键

);

CREATE TABLE major(
	id INT PRIMARY KEY,
	majorName VARCHAR(20)
);

#查看stuinfo中的所有索引，包括主键、外键、唯一
SHOW INDEX FROM stuinfo;
```

```mysql
#2.添加表级约束
/*

语法：在各个字段的最下面
 【constraint 约束名】 约束类型(字段名) 
*/

DROP TABLE IF EXISTS stuinfo;
CREATE TABLE stuinfo(
	id INT,
	stuname VARCHAR(20),
	gender CHAR(1),
	seat INT,
	age INT,
	majorid INT,
	
	CONSTRAINT pk PRIMARY KEY(id),#主键
	CONSTRAINT uq UNIQUE(seat),#唯一键
	CONSTRAINT ck CHECK(gender ='男' OR gender  = '女'),#检查
	CONSTRAINT fk_stuinfo_major FOREIGN KEY(majorid) REFERENCES major(id)#外键
	
);
SHOW INDEX FROM stuinfo;
```

```mysql
#二、修改表时添加约束

/*
1、添加列级约束
alter table 表名 modify column 字段名 字段类型 新约束;

2、添加表级约束
alter table 表名 add 【constraint 约束名】 约束类型(字段名) 【外键的引用】;


*/
DROP TABLE IF EXISTS stuinfo;
CREATE TABLE stuinfo(
	id INT,
	stuname VARCHAR(20),
	gender CHAR(1),
	seat INT,
	age INT,
	majorid INT
)
DESC stuinfo;
#1.添加非空约束
ALTER TABLE stuinfo MODIFY COLUMN stuname VARCHAR(20)  NOT NULL;
#2.添加默认约束
ALTER TABLE stuinfo MODIFY COLUMN age INT DEFAULT 18;
#3.添加主键
#①列级约束
ALTER TABLE stuinfo MODIFY COLUMN id INT PRIMARY KEY;
#②表级约束
ALTER TABLE stuinfo ADD PRIMARY KEY(id);

#4.添加唯一

#①列级约束
ALTER TABLE stuinfo MODIFY COLUMN seat INT UNIQUE;
#②表级约束
ALTER TABLE stuinfo ADD UNIQUE(seat);


#5.添加外键
ALTER TABLE stuinfo ADD CONSTRAINT fk_stuinfo_major FOREIGN KEY(majorid) REFERENCES major(id); 

#三、修改表时删除约束

#1.删除非空约束
ALTER TABLE stuinfo MODIFY COLUMN stuname VARCHAR(20) NULL;

#2.删除默认约束
ALTER TABLE stuinfo MODIFY COLUMN age INT ;

#3.删除主键
ALTER TABLE stuinfo DROP PRIMARY KEY;

#4.删除唯一
ALTER TABLE stuinfo DROP INDEX seat;

#5.删除外键
ALTER TABLE stuinfo DROP FOREIGN KEY fk_stuinfo_major;

SHOW INDEX FROM stuinfo;
```

### 事物

一个或一组sql语句组成一个执行单元，这个执行单元要么全部执行，要么全部不执行。

##### 特性

原子性：一个事务不可再分割，要么都执行要么都不执行
一致性：一个事务执行会使数据从一个一致状态切换到另外一个一致状态
隔离性：一个事务的执行不受其他事务的干扰
持久性：一个事务一旦提交，则会永久的改变数据库的数据.

##### 事务的创建

隐式事务：事务没有明显的开启和结束的标记
比如insert、update、delete语句

显式事务：事务具有明显的开启和结束的标记
前提：必须先设置自动提交功能为禁用

```mysql
#1.演示事务的使用步骤

#开启事务
SET autocommit=0;
START TRANSACTION;
#编写一组事务的语句
UPDATE account SET balance = 1000 WHERE username='张无忌';
UPDATE account SET balance = 1000 WHERE username='赵敏';

#结束事务
ROLLBACK;
#commit;

SELECT * FROM account;


#2.演示事务对于delete和truncate的处理的区别

SET autocommit=0;
START TRANSACTION;

DELETE FROM account;
ROLLBACK;



#3.演示savepoint 的使用
SET autocommit=0;
START TRANSACTION;
DELETE FROM account WHERE id=25;
SAVEPOINT a;#设置保存点
DELETE FROM account WHERE id=28;
ROLLBACK TO a;#回滚到保存点


SELECT * FROM account;
```

### 视图

含义：虚拟表，和普通表一样使用

比如：舞蹈班和普通班级的对比
创建语法的关键字	是否实际占用物理空间	使用

视图	create view		只是保存了sql逻辑	增删改查，只是一般不能增删改

表	create table		保存了数据		增删改查

```mysql
#案例：查询姓张的学生名和专业名
SELECT stuname,majorname
FROM stuinfo s
INNER JOIN major m ON s.`majorid`= m.`id`
WHERE s.`stuname` LIKE '张%';

CREATE VIEW v1
AS
SELECT stuname,majorname
FROM stuinfo s
INNER JOIN major m ON s.`majorid`= m.`id`;

SELECT * FROM v1 WHERE stuname LIKE '张%';
```

##### 创建视图

```mysql
#1.查询姓名中包含a字符的员工名、部门名和工种信息
#①创建
CREATE VIEW myv1
AS

SELECT last_name,department_name,job_title
FROM employees e
JOIN departments d ON e.department_id  = d.department_id
JOIN jobs j ON j.job_id  = e.job_id;

#②使用
SELECT * FROM myv1 WHERE last_name LIKE '%a%';
```

```mysql
#2.查询各部门的平均工资级别

#①创建视图查看每个部门的平均工资
CREATE VIEW myv2
AS
SELECT AVG(salary) ag,department_id
FROM employees
GROUP BY department_id;

#②使用
SELECT myv2.`ag`,g.grade_level
FROM myv2
JOIN job_grades g
ON myv2.`ag` BETWEEN g.`lowest_sal` AND g.`highest_sal`;
```

```mysql
#3.查询平均工资最低的部门信息

SELECT * FROM myv2 ORDER BY ag LIMIT 1;

#4.查询平均工资最低的部门名和工资

CREATE VIEW myv3
AS
SELECT * FROM myv2 ORDER BY ag LIMIT 1;


SELECT d.*,m.ag
FROM myv3 m
JOIN departments d
ON m.`department_id`=d.`department_id`;




#二、视图的修改

#方式一：
/*
create or replace view  视图名
as
查询语句;

*/
SELECT * FROM myv3 

CREATE OR REPLACE VIEW myv3
AS
SELECT AVG(salary),job_id
FROM employees
GROUP BY job_id;

#方式二：
/*
语法：
alter view 视图名
as 
查询语句;

*/
ALTER VIEW myv3
AS
SELECT * FROM employees;

#三、删除视图

/*

语法：drop view 视图名,视图名,...;
*/

DROP VIEW emp_v1,emp_v2,myv3;


#四、查看视图

DESC myv3;

SHOW CREATE VIEW myv3;


#五、视图的更新

CREATE OR REPLACE VIEW myv1
AS
SELECT last_name,email,salary*12*(1+IFNULL(commission_pct,0)) "annual salary"
FROM employees;

CREATE OR REPLACE VIEW myv1
AS
SELECT last_name,email
FROM employees;


SELECT * FROM myv1;
SELECT * FROM employees;
#1.插入

INSERT INTO myv1 VALUES('张飞','zf@qq.com');

#2.修改
UPDATE myv1 SET last_name = '张无忌' WHERE last_name='张飞';

#3.删除
DELETE FROM myv1 WHERE last_name = '张无忌';

#具备以下特点的视图不允许更新


#①包含以下关键字的sql语句：分组函数、distinct、group  by、having、union或者union all

CREATE OR REPLACE VIEW myv1
AS
SELECT MAX(salary) m,department_id
FROM employees
GROUP BY department_id;

SELECT * FROM myv1;

#更新
UPDATE myv1 SET m=9000 WHERE department_id=10;

#②常量视图
CREATE OR REPLACE VIEW myv2
AS

SELECT 'john' NAME;

SELECT * FROM myv2;

#更新
UPDATE myv2 SET NAME='lucy';





#③Select中包含子查询

CREATE OR REPLACE VIEW myv3
AS

SELECT department_id,(SELECT MAX(salary) FROM employees) 最高工资
FROM departments;

#更新
SELECT * FROM myv3;
UPDATE myv3 SET 最高工资=100000;


#④join
CREATE OR REPLACE VIEW myv4
AS

SELECT last_name,department_name
FROM employees e
JOIN departments d
ON e.department_id  = d.department_id;

#更新

SELECT * FROM myv4;
UPDATE myv4 SET last_name  = '张飞' WHERE last_name='Whalen';
INSERT INTO myv4 VALUES('陈真','xxxx');



#⑤from一个不能更新的视图
CREATE OR REPLACE VIEW myv5
AS

SELECT * FROM myv3;

#更新

SELECT * FROM myv5;

UPDATE myv5 SET 最高工资=10000 WHERE department_id=60;



#⑥where子句的子查询引用了from子句中的表

CREATE OR REPLACE VIEW myv6
AS

SELECT last_name,email,salary
FROM employees
WHERE employee_id IN(
	SELECT  manager_id
	FROM employees
	WHERE manager_id IS NOT NULL
);

#更新
SELECT * FROM myv6;
UPDATE myv6 SET salary=10000 WHERE last_name = 'k_ing';

```

