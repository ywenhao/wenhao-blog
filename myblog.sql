/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : myblog

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 11/12/2019 09:54:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, 'admin', '123456');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `introduce` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `article_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `addTime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `view_count` int(11) NOT NULL DEFAULT 0,
  `update_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 61 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (2, 1, '测试文章1', '介绍', '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1', '2019-10-18 11:35:06', 0, '2019-12-09 14:51:34');
INSERT INTO `article` VALUES (12, 1, '测试', '是是是', '是是是是是', '2019-12-09 00:00:00', 0, '2019-12-09 17:14:16');
INSERT INTO `article` VALUES (13, 1, '测试', '是是是', '是是是是是', '2019-12-09 00:00:00', 0, '2019-12-09 17:14:17');
INSERT INTO `article` VALUES (4, 1, '测试文章1', '介绍', '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1', '2019-12-06 00:00:00', 0, '2019-12-09 00:00:00');
INSERT INTO `article` VALUES (5, 1, '测试文章1', '介绍', '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1', '2019-12-06 00:00:00', 0, '2019-12-09 14:51:34');
INSERT INTO `article` VALUES (14, 1, '测试', '是是是', '是是是是是', '2019-12-09 00:00:00', 0, '2019-12-09 17:14:17');
INSERT INTO `article` VALUES (15, 1, '测试', '是是是', '是是是是是', '2019-12-09 00:00:00', 0, '2019-12-09 17:14:17');
INSERT INTO `article` VALUES (16, 1, '测试', '是是是', '是是是是是', '2019-12-09 00:00:00', 0, '2019-12-09 17:14:17');
INSERT INTO `article` VALUES (17, 1, '沙发', ' 饿', '都是', '2019-12-09 00:00:00', 0, '2019-12-09 17:14:55');
INSERT INTO `article` VALUES (18, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:12');
INSERT INTO `article` VALUES (19, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:15');
INSERT INTO `article` VALUES (20, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:15');
INSERT INTO `article` VALUES (21, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:15');
INSERT INTO `article` VALUES (22, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:15');
INSERT INTO `article` VALUES (23, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:15');
INSERT INTO `article` VALUES (24, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:16');
INSERT INTO `article` VALUES (25, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:16');
INSERT INTO `article` VALUES (26, 1, '搜索', '是', '搜索', '2019-12-09 00:00:00', 0, '2019-12-09 17:17:16');
INSERT INTO `article` VALUES (27, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:24');
INSERT INTO `article` VALUES (28, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:25');
INSERT INTO `article` VALUES (29, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:25');
INSERT INTO `article` VALUES (30, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:25');
INSERT INTO `article` VALUES (31, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:25');
INSERT INTO `article` VALUES (32, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:25');
INSERT INTO `article` VALUES (33, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:26');
INSERT INTO `article` VALUES (34, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:26');
INSERT INTO `article` VALUES (35, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:26');
INSERT INTO `article` VALUES (36, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:26');
INSERT INTO `article` VALUES (37, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:26');
INSERT INTO `article` VALUES (38, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:26');
INSERT INTO `article` VALUES (39, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:27');
INSERT INTO `article` VALUES (40, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:27');
INSERT INTO `article` VALUES (41, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:27');
INSERT INTO `article` VALUES (42, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:27');
INSERT INTO `article` VALUES (43, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:27');
INSERT INTO `article` VALUES (44, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:28');
INSERT INTO `article` VALUES (45, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:28');
INSERT INTO `article` VALUES (46, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:28');
INSERT INTO `article` VALUES (47, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:28');
INSERT INTO `article` VALUES (48, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:28');
INSERT INTO `article` VALUES (49, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:28');
INSERT INTO `article` VALUES (50, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:29');
INSERT INTO `article` VALUES (51, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:29');
INSERT INTO `article` VALUES (52, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:29');
INSERT INTO `article` VALUES (53, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:29');
INSERT INTO `article` VALUES (54, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:29');
INSERT INTO `article` VALUES (55, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:30');
INSERT INTO `article` VALUES (56, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:30');
INSERT INTO `article` VALUES (57, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:30');
INSERT INTO `article` VALUES (58, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:30');
INSERT INTO `article` VALUES (59, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:30');
INSERT INTO `article` VALUES (60, 1, 'dtfrt t', 'dhtr ', 'hdgfhr', '2019-12-09 00:00:00', 0, '2019-12-09 17:52:31');

-- ----------------------------
-- Table structure for blog_content
-- ----------------------------
DROP TABLE IF EXISTS `blog_content`;
CREATE TABLE `blog_content`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `introduce` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_content
-- ----------------------------
INSERT INTO `blog_content` VALUES (1, '测试文章1', '生活分类', '', '');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `orderNum` int(11) NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf32 COLLATE utf32_general_ci NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, '快乐生活', 1, 'smile');
INSERT INTO `type` VALUES (2, '前端文章', 2, 'html5');
INSERT INTO `type` VALUES (3, '絮絮叨叨', 3, 'message');

SET FOREIGN_KEY_CHECKS = 1;
