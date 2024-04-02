-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2024 at 07:33 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `disposisi_surat`
--

CREATE TABLE `disposisi_surat` (
  `id_disposisi` char(36) NOT NULL,
  `id_surat_mahasiswa` char(36) DEFAULT NULL,
  `no_surat_masuk` char(36) DEFAULT NULL,
  `pemberi_disposisi` char(36) NOT NULL,
  `tujuan_disposisi` char(36) NOT NULL,
  `status_disposisi` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  ADD KEY `pemberi_disposisi` (`pemberi_disposisi`),
  ADD KEY `tujuan_disposisi` (`tujuan_disposisi`);

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
  MODIFY `id_generate` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `disposisi_surat_ibfk_3` FOREIGN KEY (`pemberi_disposisi`) REFERENCES `asisten` (`id_asisten`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_4` FOREIGN KEY (`pemberi_disposisi`) REFERENCES `kepala_lab` (`nip_kalab`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_5` FOREIGN KEY (`pemberi_disposisi`) REFERENCES `mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_6` FOREIGN KEY (`tujuan_disposisi`) REFERENCES `asisten` (`id_asisten`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_7` FOREIGN KEY (`tujuan_disposisi`) REFERENCES `mahasiswa` (`nim_mahasiswa`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `disposisi_surat_ibfk_8` FOREIGN KEY (`tujuan_disposisi`) REFERENCES `kepala_lab` (`nip_kalab`) ON DELETE CASCADE ON UPDATE CASCADE;

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
