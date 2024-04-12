package com.anjali.aurorahotel.repository;

import com.anjali.aurorahotel.model.BookedRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<BookedRoom, Long> {

    BookedRoom findByBookingConfiramtionCode(String confirmationCode);
    void deleteById(Long bookingId);

    List<BookedRoom> findAll();

    List<BookedRoom> findByRoomId(Long roomId);
}
