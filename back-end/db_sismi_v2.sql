-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: blljzd1d9mwzqwblhg5b-mysql.services.clever-cloud.com:3306
-- Generation Time: Jun 18, 2024 at 06:01 PM
-- Server version: 8.0.22-13
-- PHP Version: 8.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blljzd1d9mwzqwblhg5b`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`, `created_at`, `updated_at`) VALUES
('c39f962a-6cec-4179-b341-03e8bf367641', 'admin ', '$2b$10$Irpm3eLXfFMZUXuzxXT5JeTs7t.XKDTM2rOMQNG2u6ohnXGfPLsF6', '2024-04-03 22:46:32', '2024-04-04 15:52:13');

-- --------------------------------------------------------

--
-- Table structure for table `asisten`
--

CREATE TABLE `asisten` (
  `id_asisten` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_asisten` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password_asisten` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `ttd_asisten` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `id_role` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `asisten`
--

INSERT INTO `asisten` (`id_asisten`, `nama_asisten`, `password_asisten`, `ttd_asisten`, `id_role`, `created_at`, `updated_at`) VALUES
('84f26ff2-807f-4622-a39a-f942e38ec386', 'dila baru aj', '$2b$10$32UR1Mmq2WH6Cf3oCs6NNOWeuwKZxnMmt5S27KSsIPqYNMa0wJQ4K', 'Nadini 1.jpg', '2e976dbf-ea26-4fa7-8eba-892ad192fae7', '2024-05-07 23:24:39', '2024-06-19 00:25:39'),
('f9cad2db-25b9-4fc3-a984-1f22dbca874e', 'dila baru edit banget woiilah', '$2b$10$u/Bz9TX61OnG1RK/hUkyR.amQH9gAGz7y1twXuNeKkL1Ok1klijpu', 'codeee.png', 'c51a40e2-4e21-481d-85b8-897be45ec15d', '2024-04-04 21:52:16', '2024-06-18 22:44:57');

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_barang` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `status_barang` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `nama_barang`, `status_barang`, `created_at`, `updated_at`) VALUES
('87e45da4-a232-4326-acf8-a9a835872271', 'meja aja', 'tidak tersedia', '2024-05-14 10:28:59', '2024-05-14 10:28:59'),
('8a652ecb-574f-4f5e-80e4-119543d55d31', 'meja komputer', 'tersedia', '2024-05-14 10:28:27', '2024-05-14 10:28:27');

-- --------------------------------------------------------

--
-- Table structure for table `detail_generate_surat`
--

CREATE TABLE `detail_generate_surat` (
  `id_detail_generate` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `id_generate` int NOT NULL,
  `id_barang` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `disposisi_surat`
--

CREATE TABLE `disposisi_surat` (
  `id_disposisi` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `id_surat_mahasiswa` char(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `no_surat_keluar` char(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status_disposisi` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `tujuan_disposisi` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `pemberi_disposisi_mahasiswa` char(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pemberi_disposisi_asisten` char(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `disposisi_surat`
--

INSERT INTO `disposisi_surat` (`id_disposisi`, `id_surat_mahasiswa`, `no_surat_keluar`, `status_disposisi`, `tujuan_disposisi`, `pemberi_disposisi_mahasiswa`, `pemberi_disposisi_asisten`, `created_at`, `updated_at`) VALUES
('12cdbe26-f922-49ab-b31e-3009967086e2', 'cf5eb846-2de9-4889-8eb6-cf2111b322cf', NULL, 'TTD Kordas', 'koordinator asisten', '2111522021', NULL, '2024-06-18 23:23:46', '2024-06-18 23:58:49');

-- --------------------------------------------------------

--
-- Table structure for table `generate_surat`
--

CREATE TABLE `generate_surat` (
  `id_generate` int NOT NULL,
  `id_jenis` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_generate` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `nim_mahasiswa` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `keperluan_peminjaman_ruang` longtext COLLATE utf8mb4_general_ci,
  `tanggal_peminjaman_ruang` date DEFAULT NULL,
  `waktu_peminjaman_ruang` time DEFAULT NULL,
  `keperluan_peminjaman_barang` longtext COLLATE utf8mb4_general_ci,
  `tanggal_peminjaman_barang` date DEFAULT NULL,
  `hasil_generate` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `generate_surat`
--

INSERT INTO `generate_surat` (`id_generate`, `id_jenis`, `nama_generate`, `nim_mahasiswa`, `keperluan_peminjaman_ruang`, `tanggal_peminjaman_ruang`, `waktu_peminjaman_ruang`, `keperluan_peminjaman_barang`, `tanggal_peminjaman_barang`, `hasil_generate`, `created_at`, `updated_at`) VALUES
(13, 'a263bffd-edb4-4fcf-838a-29fceb2b7c83', 'ini surat pengerjaan TA', '2111522021', NULL, NULL, NULL, NULL, NULL, 'ini surat pengerjaan TA_nadini annisa baru_PengerjaanTA.pdf', '2024-06-18 16:04:23', '2024-06-18 16:04:23');

-- --------------------------------------------------------

--
-- Table structure for table `jenis_surat`
--

CREATE TABLE `jenis_surat` (
  `id_jenis` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_jenis` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jenis_surat`
--

INSERT INTO `jenis_surat` (`id_jenis`, `nama_jenis`, `created_at`, `updated_at`) VALUES
('10742c92-d90e-43d2-bf59-51b3ce89a69e', 'Surat Peminjaman Ruangan', '2024-05-11 11:56:22', '2024-05-11 11:56:22'),
('49e83730-208e-4062-8244-f729e64b2d7f', 'Surat Peminjaman Barang', '2024-05-11 11:56:06', '2024-05-11 11:56:06'),
('a263bffd-edb4-4fcf-838a-29fceb2b7c83', 'Surat Permohonan Pengerjaan TA', '2024-05-11 11:56:36', '2024-05-11 11:56:36');

-- --------------------------------------------------------

--
-- Table structure for table `kepala_lab`
--

CREATE TABLE `kepala_lab` (
  `nip_kalab` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_kalab` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password_kalab` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `ttd_kalab` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kepala_lab`
--

INSERT INTO `kepala_lab` (`nip_kalab`, `nama_kalab`, `password_kalab`, `ttd_kalab`, `created_at`, `updated_at`) VALUES
('12345', 'dini kalab', '$2b$10$3WL7Psyu05Pyo6zfYnpC5Ofyash2sxO.9YPvGVebgLPdvK2kq1r0q', 'codeee.png', '2024-04-04 08:11:26', '2024-05-24 15:25:22');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim_mahasiswa` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_mahasiswa` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password_mahasiswa` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `alamat_mahasiswa` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `ttd_mahasiswa` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`nim_mahasiswa`, `nama_mahasiswa`, `password_mahasiswa`, `alamat_mahasiswa`, `ttd_mahasiswa`, `created_at`, `updated_at`) VALUES
('2111522021', 'nadini annisa baru banget', '$2b$10$ts6/mw4xxhIX5c.og97Wy.dh8gabH3gdzTX2b9.oQNAGDerOUXnvu', 'JL. TALAGO', 'Slide 2.jpg', '2024-05-05 22:51:26', '2024-06-18 23:25:06');

-- --------------------------------------------------------

--
-- Table structure for table `role_asisten`
--

CREATE TABLE `role_asisten` (
  `id_role` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_role` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role_asisten`
--

INSERT INTO `role_asisten` (`id_role`, `nama_role`, `created_at`, `updated_at`) VALUES
('2e976dbf-ea26-4fa7-8eba-892ad192fae7', 'Asisten', '2024-04-04 13:39:26', '2024-04-04 13:39:26'),
('c51a40e2-4e21-481d-85b8-897be45ec15d', 'Koordinator Asisten', '2024-04-04 13:39:08', '2024-04-04 13:39:08');

-- --------------------------------------------------------

--
-- Table structure for table `surat_keluar`
--

CREATE TABLE `surat_keluar` (
  `no_surat_keluar` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `id_asisten` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_surat_keluar` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `file_surat_keluar` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `surat_keluar`
--

INSERT INTO `surat_keluar` (`no_surat_keluar`, `id_asisten`, `nama_surat_keluar`, `file_surat_keluar`, `created_at`, `updated_at`) VALUES
('2f2a9ddd-573d-4ff5-8389-5cb6ea828ecc', '84f26ff2-807f-4622-a39a-f942e38ec386', 'surat keluar pertama', 'TESTING.pdf', '2024-06-19 00:47:42', '2024-06-19 00:47:42');

-- --------------------------------------------------------

--
-- Table structure for table `surat_mahasiswa`
--

CREATE TABLE `surat_mahasiswa` (
  `id_surat_mahasiswa` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nim_mahasiswa` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `file_surat_mahasiswa` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_surat_mahasiswa` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `surat_mahasiswa`
--

INSERT INTO `surat_mahasiswa` (`id_surat_mahasiswa`, `nim_mahasiswa`, `file_surat_mahasiswa`, `nama_surat_mahasiswa`, `created_at`, `updated_at`) VALUES
('cf5eb846-2de9-4889-8eb6-cf2111b322cf', '2111522021', 'TESTING.pdf', 'ini adalah surat mahasiswa', '2024-06-18 16:16:04', '2024-06-18 16:16:04');

-- --------------------------------------------------------

--
-- Table structure for table `surat_masuk`
--

CREATE TABLE `surat_masuk` (
  `no_surat_masuk` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `id_surat_mahasiswa` char(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_asisten` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_surat_masuk` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `file_surat_masuk` varchar(256) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `token_admin`
--

CREATE TABLE `token_admin` (
  `id_token` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `id_admin` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `token` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `expires_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token_admin`
--

INSERT INTO `token_admin` (`id_token`, `id_admin`, `token`, `created_at`, `updated_at`, `expires_at`) VALUES
('0841fd13-b6f8-43ea-9dc0-94845c716208', 'c39f962a-6cec-4179-b341-03e8bf367641', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6ImMzOWY5NjJhLTZjZWMtNDE3OS1iMzQxLTAzZThiZjM2NzY0MSIsImlhdCI6MTcxODY0NDAyOSwiZXhwIjoxNzE5MjQ4ODI5fQ.0VMQOm29CG13bsV5h-FRTLx3oL5zEsXwNCAfVAnbtXU', '2024-06-18', '2024-06-18', '2024-06-25');

-- --------------------------------------------------------

--
-- Table structure for table `token_asisten`
--

CREATE TABLE `token_asisten` (
  `id_token` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `id_asisten` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `token` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `expires_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token_asisten`
--

INSERT INTO `token_asisten` (`id_token`, `id_asisten`, `token`, `created_at`, `updated_at`, `expires_at`) VALUES
('4a6a74a5-7d47-41df-bd06-db94ba641d3e', 'f9cad2db-25b9-4fc3-a984-1f22dbca874e', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hc2lzdGVuIjoiZjljYWQyZGItMjViOS00ZmMzLWE5ODQtMWYyMmRiY2E4NzRlIiwiaWRfcm9sZSI6ImM1MWE0MGUyLTRlMjEtNDgxZC04NWI4LTg5N2JlNDVlYzE1ZCIsImlhdCI6MTcxODczMTY1MCwiZXhwIjoxNzE5MzM2NDUwfQ.yRX7gbK7cLnQjy9LeRaEMCI9-4xxuEYXnVb6b0VH89c', '2024-06-19', '2024-06-19', '2024-06-26'),
('ec207e2d-2222-4649-8f4a-ed01de4b7407', '84f26ff2-807f-4622-a39a-f942e38ec386', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hc2lzdGVuIjoiODRmMjZmZjItODA3Zi00NjIyLWEzOWEtZjk0MmUzOGVjMzg2IiwiaWRfcm9sZSI6IjJlOTc2ZGJmLWVhMjYtNGZhNy04ZWJhLTg5MmFkMTkyZmFlNyIsImlhdCI6MTcxODczMjcyMCwiZXhwIjoxNzE5MzM3NTIwfQ.eFb5_4QuCcOJOADwcUGWL8uJWxL4ZfeXsNTC9d2KzH8', '2024-06-19', '2024-06-19', '2024-06-26');

-- --------------------------------------------------------

--
-- Table structure for table `token_kalab`
--

CREATE TABLE `token_kalab` (
  `id_token` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nip_kalab` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `token` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` date NOT NULL,
  `expires_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `token_mahasiswa`
--

CREATE TABLE `token_mahasiswa` (
  `id_token` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `nim_mahasiswa` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `token` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `expires_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token_mahasiswa`
--

INSERT INTO `token_mahasiswa` (`id_token`, `nim_mahasiswa`, `token`, `created_at`, `updated_at`, `expires_at`) VALUES
('73f18a2a-58ec-430d-9d73-0824c6027307', '2111522021', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaW1fbWFoYXNpc3dhIjoiMjExMTUyMjAyMSIsImlhdCI6MTcxODcyNjI0OSwiZXhwIjoxNzE5MzMxMDQ5fQ.ABHK241zwjulmPOTs5OVh3LYvj8GYL-psyH5cNpy2ZI', '2024-06-18', '2024-06-18', '2024-06-25'),
('b25840fe-6067-46ff-943e-309ba8feb4e2', '2111522021', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaW1fbWFoYXNpc3dhIjoiMjExMTUyMjAyMSIsImlhdCI6MTcxODcyNTgxNywiZXhwIjoxNzE5MzMwNjE3fQ.f5tJJoN83zskqBPGz2NCjRaFi1r83YQLfiztNsu1DqI', '2024-06-18', '2024-06-18', '2024-06-25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `asisten`
--
ALTER TABLE `asisten`
  ADD PRIMARY KEY (`id_asisten`),
  ADD KEY `id_role` (`id_role`);

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indexes for table `detail_generate_surat`
--
ALTER TABLE `detail_generate_surat`
  ADD PRIMARY KEY (`id_detail_generate`),
  ADD KEY `id_generate` (`id_generate`),
  ADD KEY `id_barang` (`id_barang`);

--
-- Indexes for table `disposisi_surat`
--
ALTER TABLE `disposisi_surat`
  ADD PRIMARY KEY (`id_disposisi`),
  ADD KEY `id_surat_mahasiswa` (`id_surat_mahasiswa`),
  ADD KEY `pemberi_disposisi` (`tujuan_disposisi`),
  ADD KEY `pemberi_disposisi_mahasiswa` (`pemberi_disposisi_mahasiswa`,`pemberi_disposisi_asisten`),
  ADD KEY `pemberi_disposisi_asisten` (`pemberi_disposisi_asisten`),
  ADD KEY `no_surat_keluar` (`no_surat_keluar`);

--
-- Indexes for table `generate_surat`
--
ALTER TABLE `generate_surat`
  ADD PRIMARY KEY (`id_generate`),
  ADD KEY `id_jenis` (`id_jenis`),
  ADD KEY `nim_mahasiswa` (`nim_mahasiswa`);

--
-- Indexes for table `jenis_surat`
--
ALTER TABLE `jenis_surat`
  ADD PRIMARY KEY (`id_jenis`);

--
-- Indexes for table `kepala_lab`
--
ALTER TABLE `kepala_lab`
  ADD PRIMARY KEY (`nip_kalab`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim_mahasiswa`);

--
-- Indexes for table `role_asisten`
--
ALTER TABLE `role_asisten`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `surat_keluar`
--
ALTER TABLE `surat_keluar`
  ADD PRIMARY KEY (`no_surat_keluar`),
  ADD KEY `id_asisten` (`id_asisten`);

--
-- Indexes for table `surat_mahasiswa`
--
ALTER TABLE `surat_mahasiswa`
  ADD PRIMARY KEY (`id_surat_mahasiswa`),
  ADD KEY `nim_mahasiswa` (`nim_mahasiswa`);

--
-- Indexes for table `surat_masuk`
--
ALTER TABLE `surat_masuk`
  ADD PRIMARY KEY (`no_surat_masuk`),
  ADD KEY `id_asisten` (`id_asisten`),
  ADD KEY `id_surat_mahasiswa` (`id_surat_mahasiswa`);

--
-- Indexes for table `token_admin`
--
ALTER TABLE `token_admin`
  ADD PRIMARY KEY (`id_token`),
  ADD KEY `id_admin` (`id_admin`);

--
-- Indexes for table `token_asisten`
--
ALTER TABLE `token_asisten`
  ADD PRIMARY KEY (`id_token`),
  ADD KEY `id_asisten` (`id_asisten`);

--
-- Indexes for table `token_kalab`
--
ALTER TABLE `token_kalab`
  ADD PRIMARY KEY (`id_token`),
  ADD KEY `nip_kalab` (`nip_kalab`);

--
-- Indexes for table `token_mahasiswa`
--
ALTER TABLE `token_mahasiswa`
  ADD PRIMARY KEY (`id_token`),
  ADD KEY `nim_mahasiswa` (`nim_mahasiswa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `generate_surat`
--
ALTER TABLE `generate_surat`
  MODIFY `id_generate` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asisten`
--
ALTER TABLE `asisten`
  ADD CONSTRAINT `asisten_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role_asisten` (`id_role`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detail_generate_surat`
--
ALTER TABLE `detail_generate_surat`
  ADD CONSTRAINT `detail_generate_surat_ibfk_1` FOREIGN KEY (`id_generate`) REFERENCES `generate_surat` (`id_generate`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detail_generate_surat_ibfk_2` FOREIGN KEY (`id_barang`) REFERENCES `barang` (`id_barang`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `disposisi_surat`
--
ALTER TABLE `disposisi_surat`
  ADD CONSTRAINT `disposisi_surat_ibfk_1` FOREIGN KEY (`id_surat_mahasiswa`) REFERENCES `surat_mahasiswa` (`id_surat_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_4` FOREIGN KEY (`pemberi_disposisi_mahasiswa`) REFERENCES `mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_5` FOREIGN KEY (`pemberi_disposisi_asisten`) REFERENCES `asisten` (`id_asisten`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_6` FOREIGN KEY (`no_surat_keluar`) REFERENCES `surat_keluar` (`no_surat_keluar`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `generate_surat`
--
ALTER TABLE `generate_surat`
  ADD CONSTRAINT `generate_surat_ibfk_1` FOREIGN KEY (`id_jenis`) REFERENCES `jenis_surat` (`id_jenis`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `generate_surat_ibfk_2` FOREIGN KEY (`nim_mahasiswa`) REFERENCES `mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `surat_keluar`
--
ALTER TABLE `surat_keluar`
  ADD CONSTRAINT `surat_keluar_ibfk_1` FOREIGN KEY (`id_asisten`) REFERENCES `asisten` (`id_asisten`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `surat_mahasiswa`
--
ALTER TABLE `surat_mahasiswa`
  ADD CONSTRAINT `surat_mahasiswa_ibfk_1` FOREIGN KEY (`nim_mahasiswa`) REFERENCES `mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `surat_masuk`
--
ALTER TABLE `surat_masuk`
  ADD CONSTRAINT `surat_masuk_ibfk_1` FOREIGN KEY (`id_asisten`) REFERENCES `asisten` (`id_asisten`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `surat_masuk_ibfk_2` FOREIGN KEY (`id_surat_mahasiswa`) REFERENCES `surat_mahasiswa` (`id_surat_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `token_admin`
--
ALTER TABLE `token_admin`
  ADD CONSTRAINT `token_admin_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `admin` (`id_admin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `token_asisten`
--
ALTER TABLE `token_asisten`
  ADD CONSTRAINT `token_asisten_ibfk_1` FOREIGN KEY (`id_asisten`) REFERENCES `asisten` (`id_asisten`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `token_kalab`
--
ALTER TABLE `token_kalab`
  ADD CONSTRAINT `token_kalab_ibfk_1` FOREIGN KEY (`nip_kalab`) REFERENCES `kepala_lab` (`nip_kalab`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `token_mahasiswa`
--
ALTER TABLE `token_mahasiswa`
  ADD CONSTRAINT `token_mahasiswa_ibfk_1` FOREIGN KEY (`nim_mahasiswa`) REFERENCES `mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
