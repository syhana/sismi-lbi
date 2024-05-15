-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2024 at 07:33 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sismi`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` char(36) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
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
  `id_asisten` char(36) NOT NULL,
  `nama_asisten` varchar(100) NOT NULL,
  `password_asisten` varchar(256) NOT NULL,
  `ttd_asisten` varchar(256) NOT NULL,
  `id_role` char(36) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `asisten`
--

INSERT INTO `asisten` (`id_asisten`, `nama_asisten`, `password_asisten`, `ttd_asisten`, `id_role`, `created_at`, `updated_at`) VALUES
('84f26ff2-807f-4622-a39a-f942e38ec386', 'dila', '$2b$10$n9RBJDjv8dXngfJm9/8VeOmjwdk..lH0YVqD4UtlMDy48NDZif9ui', 'DW Supermarket Sales (1).jpg', '2e976dbf-ea26-4fa7-8eba-892ad192fae7', '2024-05-07 23:24:39', '2024-05-07 23:24:39'),
('f9cad2db-25b9-4fc3-a984-1f22dbca874e', 'dila baru', '$2b$10$KPoc9OZ5YmPBvMUfkfVtEuWqKUUWV2wqlifgebydCG8V45k0kcxqe', 'codeee.png', 'c51a40e2-4e21-481d-85b8-897be45ec15d', '2024-04-04 21:52:16', '2024-04-04 21:53:28');

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` char(36) NOT NULL,
  `nama_barang` varchar(256) NOT NULL,
  `status_barang` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
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
  `id_detail_generate` char(36) NOT NULL,
  `id_generate` int(11) NOT NULL,
  `id_barang` char(36) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detail_generate_surat`
--

INSERT INTO `detail_generate_surat` (`id_detail_generate`, `id_generate`, `id_barang`, `created_at`, `updated_at`) VALUES
('c533ec74-ea97-498f-83a4-5a3adebc5131', 4, '8a652ecb-574f-4f5e-80e4-119543d55d31', '2024-05-14 15:05:44', '2024-05-14 15:05:44'),
('d4eecf79-dcb8-4756-a1f5-28b2aa9f8ae8', 4, '87e45da4-a232-4326-acf8-a9a835872271', '2024-05-14 15:05:44', '2024-05-14 15:05:44');

-- --------------------------------------------------------

--
-- Table structure for table `disposisi_surat`
--

CREATE TABLE `disposisi_surat` (
  `id_disposisi` char(36) NOT NULL,
  `id_surat_mahasiswa` char(36) DEFAULT NULL,
  `no_surat_masuk` char(36) DEFAULT NULL,
  `status_disposisi` varchar(100) NOT NULL,
  `tujuan_disposisi` varchar(36) NOT NULL,
  `pemberi_disposisi_mahasiswa` char(36) DEFAULT NULL,
  `pemberi_disposisi_asisten` char(36) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `disposisi_surat`
--

INSERT INTO `disposisi_surat` (`id_disposisi`, `id_surat_mahasiswa`, `no_surat_masuk`, `status_disposisi`, `tujuan_disposisi`, `pemberi_disposisi_mahasiswa`, `pemberi_disposisi_asisten`, `created_at`, `updated_at`) VALUES
('b4881e84-59ab-4ad2-8531-43ae96a46b93', 'c3858bb4-b804-4397-99ef-ec5a62f704d4', NULL, 'menunggu', 'kepala laboratorium', '2111522021', NULL, '2024-05-11 00:19:25', '2024-05-11 00:28:57');

-- --------------------------------------------------------

--
-- Table structure for table `generate_surat`
--

CREATE TABLE `generate_surat` (
  `id_generate` int(11) NOT NULL,
  `id_jenis` char(36) NOT NULL,
  `nama_generate` varchar(256) NOT NULL,
  `nim_mahasiswa` char(36) NOT NULL,
  `keperluan_peminjaman_ruang` longtext DEFAULT NULL,
  `tanggal_peminjaman_ruang` date DEFAULT NULL,
  `waktu_peminjaman_ruang` time DEFAULT NULL,
  `keperluan_peminjaman_barang` longtext DEFAULT NULL,
  `tanggal_peminjaman_barang` date DEFAULT NULL,
  `hasil_generate` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `generate_surat`
--

INSERT INTO `generate_surat` (`id_generate`, `id_jenis`, `nama_generate`, `nim_mahasiswa`, `keperluan_peminjaman_ruang`, `tanggal_peminjaman_ruang`, `waktu_peminjaman_ruang`, `keperluan_peminjaman_barang`, `tanggal_peminjaman_barang`, `hasil_generate`, `created_at`, `updated_at`) VALUES
(1, '10742c92-d90e-43d2-bf59-51b3ce89a69e', 'ini sruat peminjaman ruangan pertama baru', '2111522021', 'untuk meminjam ruangan LBI ada acara soalnya', '0000-00-00', '00:00:14', NULL, NULL, 'ini sruat peminjaman ruangan pertama baru_Nadini Annisa Byant.docx', '2024-05-14 10:10:05', '2024-05-14 10:10:05'),
(4, '49e83730-208e-4062-8244-f729e64b2d7f', 'ini surat peminjaman barang', '2111522021', NULL, NULL, NULL, 'untuk pinjam aja', '2024-01-20', 'ini surat peminjaman barang_Nadini Annisa Byant_PeminjamanBarang.docx', '2024-05-14 15:05:44', '2024-05-14 15:05:44'),
(7, '10742c92-d90e-43d2-bf59-51b3ce89a69e', 'ini surat peminjaman ruangan', '2111522021', 'untuk meminjam ruangan LBI ada acara soalnya', '2024-01-20', '14:00:00', NULL, NULL, 'ini surat peminjaman ruangan_Nadini Annisa Byant.docx', '2024-05-14 15:09:16', '2024-05-14 15:09:16'),
(11, 'a263bffd-edb4-4fcf-838a-29fceb2b7c83', 'ini surat pengerjaan TA', '2111522021', NULL, NULL, NULL, NULL, NULL, 'ini surat pengerjaan TA_Nadini Annisa Byant_PengerjaanTA.pdf', '2024-05-15 17:02:02', '2024-05-15 17:02:02');

-- --------------------------------------------------------

--
-- Table structure for table `jenis_surat`
--

CREATE TABLE `jenis_surat` (
  `id_jenis` char(36) NOT NULL,
  `nama_jenis` varchar(150) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
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
  `nip_kalab` char(36) NOT NULL,
  `nama_kalab` varchar(100) NOT NULL,
  `password_kalab` varchar(256) NOT NULL,
  `ttd_kalab` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kepala_lab`
--

INSERT INTO `kepala_lab` (`nip_kalab`, `nama_kalab`, `password_kalab`, `ttd_kalab`, `created_at`, `updated_at`) VALUES
('12345', 'dini baru', '$2b$10$SJQ0YIlelw/cN6Vgd.a/zenUOvz3vCltwwFcXiaLSw8cZGP/5b7E6', 'codeee.png', '2024-04-04 08:11:26', '2024-04-04 14:51:24');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim_mahasiswa` char(36) NOT NULL,
  `nama_mahasiswa` varchar(100) NOT NULL,
  `password_mahasiswa` varchar(256) NOT NULL,
  `alamat_mahasiswa` longtext NOT NULL,
  `ttd_mahasiswa` varchar(256) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`nim_mahasiswa`, `nama_mahasiswa`, `password_mahasiswa`, `alamat_mahasiswa`, `ttd_mahasiswa`, `created_at`, `updated_at`) VALUES
('2111522021', 'nadini annisa baru', '$2b$10$ts6/mw4xxhIX5c.og97Wy.dh8gabH3gdzTX2b9.oQNAGDerOUXnvu', 'JL. TALAGO', 'Slide 2.jpg', '2024-05-05 22:51:26', '2024-05-16 00:28:04');

-- --------------------------------------------------------

--
-- Table structure for table `role_asisten`
--

CREATE TABLE `role_asisten` (
  `id_role` char(36) NOT NULL,
  `nama_role` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
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
  `no_surat_keluar` char(36) NOT NULL,
  `id_asisten` char(36) NOT NULL,
  `nama_surat_keluar` varchar(256) NOT NULL,
  `file_surat_keluar` varchar(256) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `surat_mahasiswa`
--

CREATE TABLE `surat_mahasiswa` (
  `id_surat_mahasiswa` char(36) NOT NULL,
  `nim_mahasiswa` char(36) NOT NULL,
  `file_surat_mahasiswa` varchar(256) NOT NULL,
  `nama_surat_mahasiswa` longtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `surat_mahasiswa`
--

INSERT INTO `surat_mahasiswa` (`id_surat_mahasiswa`, `nim_mahasiswa`, `file_surat_mahasiswa`, `nama_surat_mahasiswa`, `created_at`, `updated_at`) VALUES
('c3858bb4-b804-4397-99ef-ec5a62f704d4', '2111522021', '1916-5504-1-PB.pdf', 'ini adalah surat mahasiswa', '2024-05-07 15:46:57', '2024-05-07 15:46:57');

-- --------------------------------------------------------

--
-- Table structure for table `surat_masuk`
--

CREATE TABLE `surat_masuk` (
  `no_surat_masuk` char(36) NOT NULL,
  `id_asisten` char(36) NOT NULL,
  `id_surat` char(36) NOT NULL,
  `nama_surat_masuk` varchar(256) NOT NULL,
  `file_surat_masuk` varchar(256) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `surat_masuk`
--

INSERT INTO `surat_masuk` (`no_surat_masuk`, `id_asisten`, `id_surat`, `nama_surat_masuk`, `file_surat_masuk`, `created_at`, `updated_at`) VALUES
('e79b433d-0bc7-11ef-b89d-e0d4643cc6a6', 'f9cad2db-25b9-4fc3-a984-1f22dbca874e', '12wewdfasfasf23423', 'surat adalah', 'ini adalah.pdf', '2024-05-06 23:44:28', '2024-05-06 23:44:28');

-- --------------------------------------------------------

--
-- Table structure for table `token_admin`
--

CREATE TABLE `token_admin` (
  `id_token` char(36) NOT NULL,
  `id_admin` char(36) NOT NULL,
  `token` longtext NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `expires_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token_admin`
--

INSERT INTO `token_admin` (`id_token`, `id_admin`, `token`, `created_at`, `updated_at`, `expires_at`) VALUES
('2474a0f5-c401-4ddd-b7cb-f3358e0690af', 'c39f962a-6cec-4179-b341-03e8bf367641', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6ImMzOWY5NjJhLTZjZWMtNDE3OS1iMzQxLTAzZThiZjM2NzY0MSIsImlhdCI6MTcxMjIwMTg1NiwiZXhwIjoxNzEyODA2NjU2fQ.JVeYU7voR0Iq8KrikYyO2N6nNcUVrOK5TvOz-cQKG5k', '2024-04-04', '2024-04-04', '0000-00-00'),
('3fb13bd5-3b8d-4978-999e-a6eb87b8de45', 'c39f962a-6cec-4179-b341-03e8bf367641', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6ImMzOWY5NjJhLTZjZWMtNDE3OS1iMzQxLTAzZThiZjM2NzY0MSIsImlhdCI6MTcxNTY4MjUwMCwiZXhwIjoxNzE2Mjg3MzAwfQ.SeGmTGBH7rhNYyT8G1RDXY8s5Dna1C0kQ5Dv16rgE7M', '2024-05-14', '2024-05-14', '2024-05-21'),
('450febc2-5996-4f13-bc99-c1d95dd5f4ce', 'c39f962a-6cec-4179-b341-03e8bf367641', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6ImMzOWY5NjJhLTZjZWMtNDE3OS1iMzQxLTAzZThiZjM2NzY0MSIsImlhdCI6MTcxMjIxMjQ5NSwiZXhwIjoxNzEyODE3Mjk1fQ.SSYtrY_PIgroFLbNuhHyRXnqu9sLZHrrjXv8P2Tx-Kk', '2024-04-04', '2024-04-04', '0000-00-00'),
('86eb1746-672f-4df8-9ece-f39cfb39486d', 'c39f962a-6cec-4179-b341-03e8bf367641', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6ImMzOWY5NjJhLTZjZWMtNDE3OS1iMzQxLTAzZThiZjM2NzY0MSIsImlhdCI6MTcxMjE4NDYxMiwiZXhwIjoxNzEyNzg5NDEyfQ.8M3OjXCCuFQrXdXa0dz9sKWY8cKXX1fMCVHxmWeA30E', '2024-04-04', '2024-04-04', '0000-00-00'),
('8c26603d-ebe9-4ccd-b0e8-737427b6970b', 'c39f962a-6cec-4179-b341-03e8bf367641', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6ImMzOWY5NjJhLTZjZWMtNDE3OS1iMzQxLTAzZThiZjM2NzY0MSIsImlhdCI6MTcxNTA5OTA3MSwiZXhwIjoxNzE1NzAzODcxfQ.Aw8iA6qsElx7g9SIqsddLtTTZmlLr5yTj8INld_jgvg', '2024-05-07', '2024-05-07', '2024-05-14'),
('b7b371c5-8d15-4a3c-b7de-b2cb926c8f7b', 'c39f962a-6cec-4179-b341-03e8bf367641', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6ImMzOWY5NjJhLTZjZWMtNDE3OS1iMzQxLTAzZThiZjM2NzY0MSIsImlhdCI6MTcxMjIwMTgzNCwiZXhwIjoxNzEyODA2NjM0fQ.Oe2C1I4mr9KAiOHXybwKJqC435ijjx_Gmlihr5wyEuA', '2024-04-04', '2024-04-04', '0000-00-00'),
('ed7f3182-a937-41b0-af74-1f5eba630edd', 'c39f962a-6cec-4179-b341-03e8bf367641', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9hZG1pbiI6ImMzOWY5NjJhLTZjZWMtNDE3OS1iMzQxLTAzZThiZjM2NzY0MSIsImlhdCI6MTcxNDkyMjI0NywiZXhwIjoxNzE1NTI3MDQ3fQ.BmTKi7lelOTrRBfH1G8BtrufvonybXE9539vB9BA4u4', '2024-05-05', '2024-05-05', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `token_asisten`
--

CREATE TABLE `token_asisten` (
  `id_token` char(36) NOT NULL,
  `id_asisten` char(36) NOT NULL,
  `token` longtext NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `expires_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `token_kalab`
--

CREATE TABLE `token_kalab` (
  `id_token` char(36) NOT NULL,
  `nip_kalab` char(36) NOT NULL,
  `token` longtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL,
  `expires_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `token_mahasiswa`
--

CREATE TABLE `token_mahasiswa` (
  `id_token` char(36) NOT NULL,
  `nim_mahasiswa` char(36) NOT NULL,
  `token` longtext NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `expires_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token_mahasiswa`
--

INSERT INTO `token_mahasiswa` (`id_token`, `nim_mahasiswa`, `token`, `created_at`, `updated_at`, `expires_at`) VALUES
('a8a71e02-af8d-488a-9377-ea4634e96219', '2111522021', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaW1fbWFoYXNpc3dhIjoiMjExMTUyMjAyMSIsImlhdCI6MTcxNTY3ODkwNSwiZXhwIjoxNzE2MjgzNzA1fQ.rtXZMfOme9yzH8Cy83jQiwYNHRPjsS4-4l9WH7KC0rc', '2024-05-14', '2024-05-14', '2024-05-21'),
('b7784e5f-9c4a-4c56-b845-fe19744b72bb', '2111522021', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaW1fbWFoYXNpc3dhIjoiMjExMTUyMjAyMSIsImlhdCI6MTcxNTAxMzM1NiwiZXhwIjoxNzE1NjE4MTU2fQ.-Z5twSOc9mlH-kaZS17qihgu-AMj78v9v3S6fZAI8fc', '2024-05-06', '2024-05-06', '2024-05-13');

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
  ADD KEY `no_surat_masuk` (`no_surat_masuk`),
  ADD KEY `pemberi_disposisi` (`tujuan_disposisi`),
  ADD KEY `pemberi_disposisi_mahasiswa` (`pemberi_disposisi_mahasiswa`,`pemberi_disposisi_asisten`),
  ADD KEY `pemberi_disposisi_asisten` (`pemberi_disposisi_asisten`);

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
  ADD KEY `id_asisten` (`id_asisten`);

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
  MODIFY `id_generate` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
  ADD CONSTRAINT `disposisi_surat_ibfk_2` FOREIGN KEY (`no_surat_masuk`) REFERENCES `surat_masuk` (`no_surat_masuk`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_3` FOREIGN KEY (`pemberi_disposisi_asisten`) REFERENCES `asisten` (`id_asisten`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_4` FOREIGN KEY (`pemberi_disposisi_mahasiswa`) REFERENCES `mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `surat_masuk_ibfk_1` FOREIGN KEY (`id_asisten`) REFERENCES `asisten` (`id_asisten`) ON DELETE CASCADE ON UPDATE CASCADE;

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
