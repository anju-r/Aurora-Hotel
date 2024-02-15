package com.anjali.aurorahotel.repository;

import com.anjali.aurorahotel.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
